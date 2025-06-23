export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="#" className="flex-shrink-0 flex items-center text-2xl font-bold text-indigo-600">
              StoryHero
            </a>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a href="#features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-gray-700">Features</a>
              <a href="#pricing" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-gray-700">Pricing</a>
              <a href="#faq" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-gray-700">FAQ</a>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
