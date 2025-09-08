export default function Navbar() {
  return (
    <nav className="bg-[var(--color-primary)] text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="#" className="flex-shrink-0 flex items-center text-2xl font-bold">
              StoryHero
            </a>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a href="#features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:text-[color:var(--color-accent)]">Features</a>
              <a href="#pricing" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:text-[color:var(--color-accent)]">Pricing</a>
              <a href="#faq" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:text-[color:var(--color-accent)]">FAQ</a>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-[var(--color-accent)] text-[color:var(--color-primary)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--color-accent)]"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
