import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import emailjs from '@emailjs/browser';
import Contact from './Contact';

vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: vi.fn(),
  },
}));

describe('Contact component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact details and enabled form fields', () => {
    render(<Contact email="andreeagaldea@gmail.com" location="Bucharest / Remote" />);

    expect(screen.getByRole('link', { name: /andreeagaldea@gmail.com/i })).toHaveAttribute(
      'href',
      'mailto:andreeagaldea@gmail.com'
    );
    expect(screen.getByText('Bucharest / Remote')).toBeInTheDocument();

    expect(screen.getByLabelText(/full name/i)).toBeEnabled();
    expect(screen.getByLabelText(/^email$/i)).toBeEnabled();
    expect(screen.getByLabelText(/subject/i)).toBeEnabled();
    expect(screen.getByLabelText(/message/i)).toBeEnabled();
    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  });

  it('submits the form via EmailJS, shows success message, and resets inputs', async () => {
    const user = userEvent.setup();
    emailjs.sendForm.mockResolvedValueOnce({ status: 200, text: 'OK' });

    render(<Contact />);

    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/^email$/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    await user.type(nameInput, 'Jane Doe');
    await user.type(emailInput, 'jane@example.com');
    await user.type(subjectInput, 'Project Proposal');
    await user.type(messageInput, 'Hello Andreea, let us collaborate!');
    await user.click(submitButton);

    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
    });

    expect(emailjs.sendForm).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(HTMLFormElement),
      expect.objectContaining({ publicKey: expect.any(String) })
    );

    expect(
      await screen.findByText(/message sent! i'll get back to you soon\./i)
    ).toBeInTheDocument();

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(subjectInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });

  it('disables submit button and shows Sending... while request is pending', async () => {
    const user = userEvent.setup();
    let resolveSend;
    emailjs.sendForm.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveSend = resolve;
        })
    );

    render(<Contact />);

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/^email$/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Hello');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    const sendingButton = screen.getByRole('button', { name: /sending\.\.\./i });
    expect(sendingButton).toBeDisabled();

    resolveSend({ status: 200, text: 'OK' });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
    });
  });

  it('shows an error message and preserves input values when EmailJS fails', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    emailjs.sendForm.mockRejectedValueOnce(new Error('Network error'));

    render(<Contact />);

    const nameInput = screen.getByLabelText(/full name/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.type(nameInput, 'Jane Doe');
    await user.type(screen.getByLabelText(/^email$/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/subject/i), 'Bug report');
    await user.type(messageInput, 'Important details that should not be lost.');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(
      await screen.findByText(/something went wrong\. please try again or email me directly\./i)
    ).toBeInTheDocument();

    expect(nameInput).toHaveValue('Jane Doe');
    expect(messageInput).toHaveValue('Important details that should not be lost.');

    consoleSpy.mockRestore();
  });
});