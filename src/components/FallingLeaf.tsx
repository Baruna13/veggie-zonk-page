import { useEffect, useState } from "react";

const FallingLeaf = ({ delay = 0 }: { delay?: number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  const left = Math.random() * 100;
  const size = 16 + Math.random() * 12;

  return (
    <span
      className="absolute animate-float-leaf pointer-events-none select-none"
      style={{
        left: `${left}%`,
        top: "-20px",
        fontSize: `${size}px`,
        animationDelay: `${delay}ms`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    >
      🍃
    </span>
  );
};

export default FallingLeaf;
