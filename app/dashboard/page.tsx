
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [ratio, setRatio] = useState("16:9");
  const [mode, setMode] = useState("text");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (prompt.trim().length < 5) {
      setMessage("Please enter a more detailed video prompt.");
      return;
    }

    setMessage(
      "Your studio is ready. The AI generation engine will be connected in the next development stage."
    );
  }

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-10">
        <Link href="/" className="text-xl font-black">
          macdellone<span className="text-violet-400">.new</span>
        </Link>

        <Link href="/" className="text-sm text-gray-400 hover:text-white">
          ← Back home
        </Link>
      </nav>

      <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Your creative workspace
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            AI Video Studio
          </h1>
          <p className="mt-4 text-gray-400">
            Turn your ideas into extraordinary visual stories.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="rounded-3xl border border-white/10 bg-[#11111b] p-5 md:p-8">
            <h2 className="text-xl font-bold">
              Create a new video
            </h2>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setMode("text");
                  setMessage("");
                }}
                className={`rounded-xl px-5 py-3 text-sm font-semibold ${
                  mode === "text"
                    ? "bg-violet-600 text-white"
                    : "border border-white/10 text-gray-400"
                }`}
              >
                ✦ Text to Video
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("image");
                  setMessage("");
                }}
                className={`rounded-xl px-5 py-3 text-sm font-semibold ${
                  mode === "image"
                    ? "bg-violet-600 text-white"
                    : "border border-white/10 text-gray-400"
                }`}
              >
                ▧ Image to Video
              </button>
            </div>

            {mode === "image" && (
              <div className="mt-7">
                <label className="mb-3 block text-sm font-semibold">
                  Upload your starting image
                </label>

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={(e) => {
                    setFileName(e.target.files?.[0]?.name || "");
                    setMessage("");
                  }}
                  className="block w-full rounded-xl border border-dashed border-violet-400/40 bg-black/20 p-5 text-sm text-gray-400 file:mr-3 file:rounded-lg file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white"
                />

                {fileName && (
                  <p className="mt-2 text-sm text-violet-300">
                    Selected: {fileName}
                  </p>
                )}
              </div>
            )}

            <div className="mt-7">
              <label className="mb-3 block text-sm font-semibold">
                Describe your video
              </label>

              <textarea
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  setMessage("");
                }}
                placeholder="A cinematic aerial shot of a futuristic city at sunset, glowing skyscrapers, flying vehicles, dramatic lighting..."
                rows={6}
                maxLength={1500}
                className="w-full resize-y rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-7 text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
              />

              <p className="mt-2 text-right text-xs text-gray-500">
                {prompt.length}/1500 characters
              </p>
            </div>

            <div className="mt-7">
              <label className="mb-3 block text-sm font-semibold">
                Video aspect ratio
              </label>

              <div className="grid grid-cols-3 gap-3">
                {["16:9", "9:16", "1:1"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRatio(item)}
                    className={`rounded-xl border p-4 text-sm font-semibold ${
                      ratio === item
                        ? "border-violet-500 bg-violet-500/15 text-violet-300"
                        : "border-white/10 text-gray-400"
                    }`}
                  >
                    {item}
                    <span className="mt-1 block text-xs font-normal">
                      {item === "16:9"
                        ? "Landscape"
                        : item === "9:16"
                        ? "Portrait"
                        : "Square"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold">
                Generation settings
              </p>
              <p className="mt-2 text-xs leading-6 text-gray-500">
                AI provider and supported video duration will be
                configured when the generation engine is integrated.
              </p>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-violet-600 px-6 py-4 font-bold text-white transition hover:bg-violet-500"
            >
              ✦ Prepare Video
            </button>

            {message && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-violet-500/30 bg-violet-500/10 p-4 text-sm leading-6 text-violet-200"
              >
                {message}
              </div>
            )}
          </div>
        </form>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#11111b] p-6">
          <h2 className="font-bold">Your creative journey</h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Your generated video library will appear here
            once AI generation and video storage are connected.
          </p>
          <div className="mt-5 rounded-xl border border-dashed border-white/10 p-8 text-center">
            <span className="text-3xl">🎬</span>
            <p className="mt-3 text-sm text-gray-500">
              No generated videos yet.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-600">
        © 2026 macdellone.new · Your AI creative studio
      </footer>
    </main>
  );
}
