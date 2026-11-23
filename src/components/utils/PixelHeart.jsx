export default function PixelHeart({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 9 8" className={className} shapeRendering="crispEdges">
      <path
        fill="#264653"
        d="M1 0h2v1h1v1h1V1h1V0h2v1h1v3H8v1H7v1H6v1H5v1H4V7H3V6H2V5H1V4H0V1h1V0z"
      />
      <path
        fill="#FFCAD4"
        d="M1 1h2v1h1v1h1V2h1V1h2v3H7v1H6v1H5v1H4V6H3V5H2V4H1V1z"
      />
      <rect x="2" y="2" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}