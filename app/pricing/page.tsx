
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Explore your creativity.",
    features: [
      "Free account registration",
      "Limited monthly AI credits",
      "Text-to-video generation",
      "Image-to-video generation",
      "MP4 video downloads",
      "No watermarks",
    ],
    featured: false,
  },
  {
    name: "Creator",
    price: "$5",
    description: "For growing content creators.",
    features: [
      "Everything in Free",
      "Larger monthly credit allowance",
      "Text-to-video generation",
      "Image-to-video generation",
      "MP4 downloads",
      "No watermarks",
    ],
    featured: false,
  },
  {
    name: "Pro Creator",
    price: "$12",
    description: "For serious creators.",
    features: [
      "Everything in Creator",
      "Higher monthly credit allowance",
      "Priority generation queue",
      "Higher resolutions where supported",
      "Advanced creative controls",
      "No watermarks",
    ],
    featured: true,
  },
  {
    name: "Studio",
    price: "$25",
    description: "For professional creative teams.",
    features: [
      "Everything in Pro",
      "Largest monthly credit allowance",
      "Priority processing",
      "Extended generation history",
      "Commercial creator workflow",
      "No watermarks",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#09090f] px-5 py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black">
            macdellone<span className="text-violet-400">.new</span>
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 hover:bg-white/5"
          >
            Open Studio →
          </Link>
        </nav>

        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Simple and transparent
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Create more.
            <span className="block text-violet-400">
              Imagine everything.
            </span>
          </h1>
          <p className="mt-5 leading-7 text-gray-400">
            Start for free and upgrade when you need
            more creative power. Every plan includes
            watermark-free video downloads.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <section
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-6 ${
                plan.featured
                  ? "border-violet-500 bg-violet-500/10"
                  : "border-white/10 bg-[#11111b]"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-violet-600 px-3 py-1 text-xs font-bold">
                  MOST POPULAR
                </span>
              )}

              <h2 className="text-xl font-bold">
                {plan.name}
              </h2>

              <p className="mt-2 min-h-10 text-sm text-gray-400">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-black">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500">
                  / month
                </span>
              </div>

              <div className="my-7 h-px bg-white/10" />

              <p className="mb-5 text-sm font-bold">
                What's included
              </p>

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-gray-300"
                  >
                    <span className="font-bold text-violet-400">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Link
                  href="/dashboard"
                  className="mt-8 rounded-xl bg-white px-5 py-4 text-center font-bold text-black hover:bg-gray-200"
                >
                  Start for free
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-8 cursor-not-allowed rounded-xl border border-white/10 px-5 py-4 font-bold text-gray-500"
                >
                  Coming soon
                </button>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#11111b] p-6 text-center">
          <h2 className="text-xl font-bold">
            Your creativity. No watermarks.
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Every Macdellone.new plan supports clean,
            watermark-free video downloads. Generation
            allowances will depend on your subscription.
          </p>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          © 2026 Macdellone.new. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
