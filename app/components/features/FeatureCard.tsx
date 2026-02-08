import { TFeatures } from "./features-data";

export default function FeatureCard({ feature }: { feature: TFeatures }) {
  const Icon = feature.icon;

  return (
    <div
      className="
        group relative rounded-2xl border bg-background p-8
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        focus-within:ring-2 focus-within:ring-primary/40
      "
    >
      <div className="flex items-center gap-2">
        {/* Icon */}
        <div
          className="
          flex h-12 w-12 items-center justify-center
          rounded-xl bg-purple-500/10 text-purple-500
          transition-colors duration-300
          group-hover:bg-purple-500 group-hover:text-white
        "
        >
          <Icon className="h-6 w-6" />
        </div>

        {/* Content */}
        <h3 className="mb-2 text-lg font-semibold tracking-tight">
          {feature.title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  );
}
