export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] text-white py-28">
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <p className="typing text-xl sm:text-2xl max-w-xl mx-auto">
          Once upon a time, a young hero discovered the magic of stories...
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Create Magical Adventures Where Your Child Is the Star</h1>
        <p className="text-lg sm:text-xl mb-8">Generate personalized stories and illustrations in minutes.</p>
        <a
          href="#pricing"
          className="inline-block px-6 py-3 bg-[var(--color-accent)] text-[color:var(--color-primary)] font-semibold rounded-md shadow hover:opacity-90"
        >
          Start Your Story
        </a>
      </div>
    </section>
  );
}
