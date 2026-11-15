
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Play,
  Video,
  ImagePlus,
  WandSparkles,
  Layers3,
  Download,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Text to Video",
    description:
      "Turn simple ideas and written prompts into cinematic AI videos.",
    number: "01",
  },
  {
    icon: ImagePlus,
    title: "Image to Video",
    description:
      "Bring still images to life with beautiful AI-powered motion.",
    number: "02",
  },
  {
    icon: Layers3,
    title: "Your Creations",
    description:
      "Keep your creative projects together and access your videos.",
    number: "03",
  },
  {
    icon: Download,
    title: "Ready to Download",
    description:
      "Download your finished creations when video generation is available.",
    number: "04",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08070D] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-64 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[150px]" />
        <div className="absolute right-0 top-[500px] h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[150px]" />
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/[0.08]">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-800 shadow-lg shadow-purple-900/30">
                <Sparkles size={22} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                macdellone<span className="text-violet-400">.new</span>
              </span>
            </Link>

            <div className="hidden items-center gap-9 text-sm text-gray-400 md:flex">
              <Link href="#features" className="transition hover:text-white">
                Features
              </Link>
              <Link href="/pricing" className="transition hover:text-white">
                Pricing
              </Link>
              <Link href="#about" className="transition hover:text-white">
                About
              </Link>
            </div>

            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-violet-100"
            >
              Open Studio <ArrowUpRight size={16} />
            </Link>
          </nav>
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-24 md:grid-cols-2 md:pb-32 md:pt-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold tracking-widest text-purple-300">
              <Sparkles size={14} />
              YOUR AI CREATIVE STUDIO
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Your imagination.
              <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                Now in motion.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Transform your ideas and images into extraordinary videos.
              Discover a new creative world with Macdellone.new.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-4 font-semibold shadow-xl shadow-purple-900/30 transition hover:scale-[1.03] hover:from-violet-500 hover:to-purple-500"
              >
                Start Creating <ArrowRight size={18} />
              </Link>

              <Link
                href="#features"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-violet-400" />
                No watermarks
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-violet-400" />
                AI-powered creativity
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-purple-600/15 blur-[90px]" />

            <div className="relative rounded-3xl border border-white/10 bg-[#12101B] p-5 shadow-2xl shadow-purple-950/40 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-purple-300">
                    MACDELLONE STUDIO
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    Creative workspace
                  </div>
                </div>
                <div className="rounded-xl border border-purple-400/20 bg-purple-500/10 p-3 text-purple-300">
                  <WandSparkles size={22} />
                </div>
              </div>

              <div className="my-6 flex aspect-[16/10] flex-col items-center justify-center overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-[#21133D] via-[#171329] to-[#090A13] p-6 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-400/10 text-purple-300">
                  <Play size={30} />
                </div>
                <h2 className="text-xl font-semibold">
                  Imagine something amazing.
                </h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
                  Your next masterpiece starts with an idea.
                </p>
                <span className="mt-5 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs text-purple-200">
                  AI STUDIO PREVIEW
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-300">
                  <Sparkles size={15} className="text-purple-400" />
                  Your creative journey starts here
                </div>
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold transition hover:bg-purple-500"
                >
                  Enter the Studio <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-white/[0.07] bg-white/[0.015] px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-purple-400">
                POWERFUL CREATIVE TOOLS
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Creativity without limits.
              </h2>
              <p className="mt-5 leading-7 text-gray-400">
                Everything you need to take your imagination from an idea
                towards a finished video.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.number}
                    className="group rounded-2xl border border-white/[0.08] bg-[#111019] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-[#171321]"
                  >
                    <div className="mb-9 flex items-center justify-between">
                      <div className="rounded-xl border border-purple-400/20 bg-purple-500/10 p-3 text-purple-300">
                        <Icon size={23} />
                      </div>
                      <span className="text-xs text-gray-600">
                        {feature.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-950/50 via-[#151020] to-[#0D0B14] px-7 py-16 text-center sm:px-14">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300">
              <Sparkles size={27} />
            </div>
            <p className="text-xs font-bold tracking-[0.25em] text-purple-300">
              THE FUTURE IS CREATIVE
            </p>
            <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
              Make your imagination move.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Step into a new creative experience with Macdellone.new.
              Your next idea could become something extraordinary.
            </p>
            <Link
              href="/dashboard"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-purple-100"
            >
              Explore the Studio <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/[0.08] px-6 py-9">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-gray-500 sm:flex-row sm:items-center">
            <Link href="/" className="font-bold text-white">
              macdellone<span className="text-purple-400">.new</span>
            </Link>
            <p>Create more. Imagine more. Make it move.</p>
            <p>© 2026 Macdellone.new. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
