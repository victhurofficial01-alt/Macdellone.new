
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    credits: "100 credits/month",
    duration: "Up to 5 seconds",
    description: "Explore AI video creation.",
    features: [
      "100 monthly credits",
      "Videos up to 5 seconds",
      "Text-to-video",
      "Image-to-video",
      "No watermark",
    ],
    button: "Start for free",
    href: "/dashboard",
    featured: false,
  },
  {
    name: "Creator",
    price: "$5",
    period: "/month",
    credits: "500 credits/month",
    duration: "Up to 10 seconds",
    description: "For creators getting started.",
    features: [
      "500 monthly credits",
      "Videos up to 10 seconds",
      "Text-to-video",
      "Image-to-video",
      "No watermark",
    ],
    button: "Coming soon",
    featured: false,
  },
  {
    name: "Pro Creator",
    price: "$12",
    period: "/month",
    credits: "1,200 credits/month",
    duration: "Up to 20 seconds",
    description: "For serious content creators.",
    features: [
      "1,200 monthly credits",
      "Videos up to 20 seconds",
      "Text-to-video",
      "Image-to-video",
      "No watermark",
    ],
    button: "Coming soon",
    featured: true,
  },
  {
    name: "Studio",
    price: "$50",
    period: "/month",
    credits: "5,000 credits/month",
    duration: "Up to 30 seconds",
    description: "More creative power for studios.",
    features: [
      "5,000 monthly credits",
      "Videos up to 30 seconds",
      "Text-to-video",
      "Image-to-video",
      "No watermark",
    ],
    button: "Coming soon",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-400">
            Simple and transparent pricing
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Choose your creative power
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Create AI videos with monthly credits. Every plan is watermark-free.
            Choose the plan that fits your creativity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <section
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-purple-500 bg-purple-950/40"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold">
                  Most popular
                </span>
              )}

              <h2 className="text-xl font-bold">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-400">
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-1 text-sm text-slate-400">
                  {plan.period}
                </span>
              </div>

              <div className="my-6 rounded-xl bg-slate-800/70 p-4">
                <p className="font-semibold text-purple-300">
                  {plan.credits}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Maximum video length: {plan.duration}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.href ? (
                <Link
                  href={plan.href}
                  className="rounded-xl bg-purple-600 px-4 py-3 text-center font-semibold transition hover:bg-purple-500"
                >
                  {plan.button}
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-xl bg-slate-700 px-4 py-3 font-semibold text-slate-300"
                >
                  {plan.button}
                </button>
              )}
            </section>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Credits refresh monthly. Video duration and generation availability
          will depend on the AI models supported by the platform.
        </p>
      </div>
    </main>
  );
}
