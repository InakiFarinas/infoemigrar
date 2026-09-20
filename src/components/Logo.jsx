export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" role="img" aria-label="Isotipo de InfoEmigrar: valija con ícono de información">
        <rect x="6" y="13" width="28" height="22" rx="3" fill="#F5F0E8" stroke="#0A1F44" strokeWidth="2" />
        <path d="M14 13v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="24" r="7" fill="#0F5B85" />
        <rect x="19" y="23" width="2" height="5" rx="1" fill="#fff" />
        <circle cx="20" cy="20.6" r="1.2" fill="#fff" />
      </svg>
      <span className="font-brand text-subhead font-bold leading-none text-brand-navy">InfoEmigrar</span>
    </div>
  );
}
