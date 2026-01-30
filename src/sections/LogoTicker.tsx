const logos = [
  { name: "FAIRE", style: "tracking-[0.3em] font-light" },
  { name: "ActiveCampaign", style: "font-semibold", suffix: ">" },
  { name: "WorkWhile", style: "font-medium", prefix: "W" },
  { name: "INTERCOM", style: "font-bold tracking-wider" },
  { name: "crypto.com", style: "font-semibold" },
  { name: "Podium", style: "font-bold" },
  { name: "FINOM", style: "font-bold tracking-wider" },
  { name: "RYANAIR", style: "font-bold" },
  { name: "amenitiz", style: "font-light tracking-wide" },
];

function LogoItem({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <div className="flex items-center gap-2 px-8 text-white/40 hover:text-white/60 transition-colors whitespace-nowrap">
      {logo.prefix && (
        <span className={`text-xl ${logo.style}`}>{logo.prefix}</span>
      )}
      <span className={`text-lg ${logo.style}`}>{logo.name}</span>
      {logo.suffix && <span className="text-lg">{logo.suffix}</span>}
    </div>
  );
}

export function LogoTicker() {
  return (
    <section className="relative py-12 border-y border-white/5 overflow-hidden">
      {/* Scrolling container */}
      <div className="flex animate-marquee">
        {/* First set */}
        <div className="flex items-center">
          {logos.map((logo, index) => (
            <LogoItem key={`first-${index}`} logo={logo} />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center">
          {logos.map((logo, index) => (
            <LogoItem key={`second-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
