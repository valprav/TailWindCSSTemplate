export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="#" className="flex-shrink-0 flex items-center text-2xl font-bold">
              StoryHero
            </a>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a href="#features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:text-yellow-200">Features</a>
              <a href="#pricing" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:text-yellow-200">Pricing</a>
              <a href="#faq" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:text-yellow-200">FAQ</a>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-yellow-300 text-pink-900 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200">Sign up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
