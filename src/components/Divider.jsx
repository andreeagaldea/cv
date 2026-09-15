export default function Divider() {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 flex items-center justify-center gap-3 px-4">

      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20" />


      <div className="flex items-center gap-1">

        <div className="w-1.5 h-1.5 rotate-45 border border-white/30 bg-white/10 opacity-70" />


        <div className="relative flex items-center justify-center">

          <div className="absolute w-3 h-3 bg-pink-400/60 blur-[3px] rounded-full" />


          <div className="relative w-2.5 h-2.5 rotate-45 bg-pink-300 border border-pink-200 shadow-[0_0_10px_rgba(255,202,212,0.8)]" />
        </div>


        <div className="w-1.5 h-1.5 rotate-45 border border-white/30 bg-white/10 opacity-70" />
      </div>


      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/20" />
    </div>
  );
}