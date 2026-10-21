export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#0a1a33" stroke="#c9a24b" strokeWidth="1.5" />
      <path d="M9 31 Q24 12 39 31" fill="none" stroke="#c9a24b" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 31h32" stroke="#c9a24b" strokeWidth="1.6" strokeLinecap="round" />
      {[14, 19, 24, 29, 34].map((x) => (
        <path key={x} d={`M${x} 31V${x === 24 ? 21.5 : x === 19 || x === 29 ? 23.3 : 26.8}`} stroke="#ead7a4" strokeWidth="1" />
      ))}
      <circle cx="24" cy="15" r="1.3" fill="#ead7a4" />
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-none">
        <span className={`block font-display text-xl font-semibold tracking-[0.12em] ${light ? 'text-white' : 'text-navy-900'}`}>
          YS MIGRANOVA
        </span>
        <span className={`mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${light ? 'text-gold-400' : 'text-gold-600'}`}>
          Soluciones Migratorias
        </span>
      </span>
    </span>
  )
}
