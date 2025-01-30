function Header() {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between bg-pink-200 px-4 py-6 shadow-md">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300 shadow-lg shadow-pink-500/50 p-1 rounded">
          TRACKER ISSUE
        </h1>
        <div class="flex space-x-4">
          <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Login
          </button>
          <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Sign Up
          </button>

          <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Logout
          </button>
        </div>
      </header>
      <div></div>
    </>
  );
}
export default Header;
