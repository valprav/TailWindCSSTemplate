export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">StoryHero</h3>
          <p className="text-white">&copy; {new Date().getFullYear()} StoryHero. All rights reserved.</p>
        </div>
        <div className="flex md:justify-end space-x-6">
          <a href="#" className="text-white hover:text-[color:var(--color-accent)]" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 19c8 0 12-7 12-12 0-.2 0-.4 0-.6A8.6 8.6 0 0022 4.3a8.2 8.2 0 01-2.4.7A4.1 4.1 0 0021.5 3a8.3 8.3 0 01-2.6 1A4.1 4.1 0 0011.5 7.9a11.7 11.7 0 01-8.5-4.3 4.1 4.1 0 001.3 5.4A4 4 0 012 8.6v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 18.6a11.7 11.7 0 006.3 1.8" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-[color:var(--color-accent)]" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12A10 10 0 1012 22V14H9v-3h3V8a3 3 0 013-3h3v3h-3v3h3l-1 3h-2v8a10 10 0 008-10z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-[color:var(--color-accent)]" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm5 5a5 5 0 110 10 5 5 0 010-10zm7-2a1 1 0 11-2 0 1 1 0 012 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
