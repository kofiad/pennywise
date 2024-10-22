export default function Footer() {
  return (
    <footer className="bg-purple-900 dark:bg-gray-800 p-4 md:p-8 lg:p-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col text-center space-y-4">
        <div className="text-white">
          <span>&copy; 2024 PennyWise. All rights reserved.</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <a href="/about" className="text-white hover:text-gray-400">About</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}
