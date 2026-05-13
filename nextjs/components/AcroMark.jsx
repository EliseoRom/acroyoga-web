export default function AcroMark({ size = 64, color = "currentColor", bg = "transparent" }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill={bg} />
      <g stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85">
        <path d="M22 30 Q18 22 14 18" />
        <path d="M22 30 Q26 22 30 16" />
        <path d="M22 30 Q14 28 8 28" />
        <path d="M22 30 L22 46" />
      </g>
      <g fill={color}>
        <circle cx="58" cy="36" r="5" />
        <path d="M58 42 L66 58 L50 58 Z" />
        <circle cx="62" cy="72" r="4" />
        <path d="M48 78 L78 78 L74 84 L52 84 Z" opacity="0.9" />
      </g>
    </svg>
  );
}
