
import Link from "next/link";

const features = [
  {
    icon: "✦",
    title: "Text to Video",
    description: "Turn your imagination into cinematic videos using AI."
  },
  {
    icon: "▧",
    title: "Image to Video",
    description: "Bring your images to life with AI-powered motion."
  },
  {
    icon: "◷",
    title: "Your Creations",
    description: "Access and download your generated videos."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          macdellone<span className="text-violet-400">.new</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#create" className="hover:text-white">Create</a>
          <a href="#about" className="hover:text-white">About</a>
        </div>

        <Link
          href="/dashboard"
          className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-500"
        >
          Open Studio ↗
        </Link>
      </nav>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 text-center">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-700/20 blur-[110px]" />

        <div className="relative">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
            ✦ YOUR CREATIVE WORLD, REIMAGINED
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Your imagination.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Now in motion.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Create extraordinary videos from simple text prompts
            and images. Meet your new creative studio, powered
            by artificial intelligence.
          </p>

          <div id="create" className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/dashboard"
              className="rounded-xl bg-violet-600 px-8 py-4 font-bold shadow-lg shadow-violet-900/30 hover:bg-violet-500"
            >
              ✦ Start Creating
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-white/15 px-8 py-4 font-semibold hover:bg-white/5"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#191329] via-[#11101c] to-[#0d0d14] p-5 md:p-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                Creative studio
              </p>
              <h2 className="mt-2 text-2xl font-bold">Imagine something amazing.</h2>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400">
              AI VIDEO STUDIO
            </span>
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-violet-400/30 bg-black/30 p-8 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-3xl">
              ✦
            </div>
            <h3 className="text-xl font-bold">Your next masterpiece starts here</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              Describe the video you dream of creating.
              Our AI studio is being prepared for your creativity.
            </p>
            <Link
              href="/dashboard"
              className="mt-6 rounded-xl bg-white px-6 py-3 font-bold text-black hover:bg-gray-200"
            >
              Enter the Studio →
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Everything you need
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Creativity without limits.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-violet-500/50"
            >
              <div className="text-3xl text-violet-400">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer id="about" className="border-t border-white/10 px-6 py-10 text-center">
        <p className="text-xl font-black">
          macdellone<span className="text-violet-400">.new</span>
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Create more. Imagine more. Make it move.
        </p>
        <p className="mt-6 text-xs text-gray-600">
          © 2026 macdellone.new. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
