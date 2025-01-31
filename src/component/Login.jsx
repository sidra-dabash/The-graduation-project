function Login() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#8E2571]">
        <form
          action=""
          className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[550px] md:h-[500px] "
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300 text-[#8E2571]">
            Login
          </h1>
          <label htmlFor="email" className="text-[#8E2571]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
          <label
            htmlFor="password"
            className="text-[#8E2571] text-sm sm:text-base"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
          <label htmlFor="re-password" className="text-[#8E2571] ">
            Re-Password
          </label>
          <input
            type="password"
            name="re-password"
            id="re-password"
            placeholder="Re-enter your password"
            className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
          <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:sc transition-all duration-300 mt-3">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
