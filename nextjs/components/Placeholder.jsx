// Striped placeholder that asks the user to drop in a real image.
// Replace by adding an <img> or next/image inside.
export default function Placeholder({ label, rounded = 22, style }) {
  return (
    <div className="ph" style={{ borderRadius: rounded, ...style }}>
      <div className="ph-stripes" />
      <span className="ph-label">{label}</span>
    </div>
  );
}
