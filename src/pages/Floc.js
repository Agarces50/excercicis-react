export default function Floc({ x, y, z }) {
  return (
    <span
      style={{ top: `${y}%`, left: `${x}%`, right: `${z}%` }}
      className="floc"
    >
      ❆
    </span>
  );
}
