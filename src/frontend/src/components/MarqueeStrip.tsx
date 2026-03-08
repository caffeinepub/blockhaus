interface MarqueeStripProps {
  bgColor?: "red" | "blue" | "orange" | "black";
}

const phrases = [
  "TUFTED BY HAND",
  "✦",
  "BAUHAUS INSPIRED",
  "✦",
  "LUXURY HOME GOODS",
  "✦",
  "HAUS ATELIER",
  "✦",
  "FORM FOLLOWS FUNCTION",
  "✦",
  "MADE WITH INTENTION",
  "✦",
];

const bgMap = {
  red: "oklch(0.52 0.22 27)",
  blue: "oklch(0.32 0.14 258)",
  orange: "oklch(0.68 0.18 52)",
  black: "oklch(0.10 0 0)",
};

const phraseItems = [
  ...phrases.map((p, i) => ({ id: `a${i}`, text: p })),
  ...phrases.map((p, i) => ({ id: `b${i}`, text: p })),
];

export default function MarqueeStrip({ bgColor = "red" }: MarqueeStripProps) {
  return (
    <div
      className="w-full overflow-hidden py-4 border-y-2 border-brand-black"
      style={{ backgroundColor: bgMap[bgColor] }}
    >
      <div className="marquee-track">
        {phraseItems.map((item) => (
          <span
            key={item.id}
            className="font-body text-xs font-semibold tracking-[0.25em] uppercase whitespace-nowrap px-6"
            style={{ color: "oklch(0.99 0 0)" }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
