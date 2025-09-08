import { useState } from 'react';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] text-white flex items-center min-h-[80vh] py-12">
      <div className="relative z-10 ml-[10%] w-[50%] max-w-2xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Create Magical Adventures Where Your Child Is the Star</h1>
        <p className="text-lg sm:text-xl">Generate personalized stories and illustrations in minutes.</p>
        <a
          href="#pricing"
          className="inline-block px-6 py-3 bg-[var(--color-accent)] text-[color:var(--color-primary)] font-semibold rounded-md shadow hover:opacity-90"
        >
          Start Your Story
        </a>
      </div>
      <div className="hidden md:flex justify-end absolute right-[8%] w-[30%]">
        <div className="storybook w-full flex flex-col relative">
          <img
            src="https://picsum.photos/seed/storybook-illustration/550/350"
            alt="Illustration"
            className="w-full flex-[6] object-cover rounded-t-md cursor-pointer"
            onClick={() => setShowVideo(true)}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-white opacity-80"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="flex-[4] p-3 text-gray-800 bg-white bg-opacity-80">
            <p className="typing-book text-sm leading-snug">
              It was a sunny afternoon, and Maya was sitting at her little desk. Beautiful, colourful beads and threads were spread all around her. She was making delicate necklaces and bracelets, dreaming about creating jewelry that people all over the world would love.<br />She had drawings and sketches of jewelry she wanted to make when she grew up.
            </p>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center animate-fade-in">
          <div className="relative w-11/12 max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="absolute -top-6 right-0 text-white text-3xl"
            >
              &times;
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Story Preview"
              allowFullScreen
              className="w-full aspect-video rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
