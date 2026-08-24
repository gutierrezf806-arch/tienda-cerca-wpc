export default function Wordmark({ className = "" }) {
  return (
    <span className={`font-logo lowercase tracking-tight ${className}`}>
      <span className="text-brand-paper">australis</span>
      <span className="text-brand-green">haus</span>
    </span>
  );
}
