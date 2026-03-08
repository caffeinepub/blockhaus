import { useNavigate } from "@tanstack/react-router";

interface ShowcasePanel {
  headline: string;
  ctaLabel: string;
  category: string;
  image: string;
}

const panels: ShowcasePanel[] = [
  {
    headline: "DEFINE YOUR SPACE",
    ctaLabel: "MIRRORS",
    category: "Mirrors",
    image: "/assets/generated/category-panel-mirrors.dim_600x900.png",
  },
  {
    headline: "GROUND YOUR ROOM",
    ctaLabel: "RUGS",
    category: "Rugs",
    image: "/assets/generated/category-panel-rugs.dim_600x900.png",
  },
  {
    headline: "REST YOUR HEAD",
    ctaLabel: "PILLOWS",
    category: "Pillows",
    image: "/assets/generated/category-panel-pillows.dim_600x900.png",
  },
];

export default function CategoryShowcaseSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {panels.map((panel, i) => (
          <button
            type="button"
            key={panel.category}
            className={`relative overflow-hidden group cursor-pointer h-[70vh] min-h-[480px] text-left w-full border-0 p-0 ${
              i < panels.length - 1 ? "md:border-r-2 border-brand-black" : ""
            }`}
            onClick={() =>
              navigate({
                to: "/products",
                search: { category: panel.category },
              })
            }
          >
            {/* Background image */}
            <img
              src={panel.image}
              alt={panel.headline}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ backgroundColor: "oklch(0.05 0 0 / 0.45)" }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
              {/* Headline at top */}
              <div>
                <h2
                  className="font-display leading-none"
                  style={{
                    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "oklch(0.99 0 0)",
                    textShadow: "0 2px 12px oklch(0.05 0 0 / 0.5)",
                  }}
                >
                  {panel.headline}
                </h2>
              </div>

              {/* CTA at bottom */}
              <div className="flex flex-col items-start gap-3">
                <span
                  className="inline-block px-6 py-3 font-body text-xs font-semibold tracking-[0.25em] uppercase border-2 transition-all duration-300"
                  style={{
                    borderColor: "oklch(0.99 0 0)",
                    color: "oklch(0.99 0 0)",
                    backgroundColor: "transparent",
                  }}
                >
                  {panel.ctaLabel}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
