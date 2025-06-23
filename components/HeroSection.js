export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] text-white flex items-center min-h-[120vh]">
      <div className="relative z-10 ml-[10%] w-[50%] max-w-xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Create Magical Adventures Where Your Child Is the Star</h1>
        <p className="text-lg sm:text-xl">Generate personalized stories and illustrations in minutes.</p>
        <a
          href="#pricing"
          className="inline-block px-6 py-3 bg-[var(--color-accent)] text-[color:var(--color-primary)] font-semibold rounded-md shadow hover:opacity-90"
        >
          Start Your Story
        </a>
      </div>
      <div className="hidden md:flex justify-end absolute right-[5%] w-[30%]">
        <div className="border-4 border-white rounded-lg overflow-hidden w-full h-80 bg-black bg-opacity-20 backdrop-blur-sm flex flex-col">
          <img src="https://picsum.photos/seed/book/400/220" alt="Illustration" className="w-full h-1/2 object-cover" />
          <div className="flex-1 p-4">
            <p className="typing-multi text-sm leading-snug">
              Once upon a time there was little girl named
              <br />Liya...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
