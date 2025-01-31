import Header from "./Header";
function NewIssue() {
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center items-center mt-12">
          <form
            action=""
            className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[550px] md:h-[500px]"
          >
            <div>
              <h1 className="text-center font-bold text-4xl mt-6 text-[#8E2571]">
                New Issue
              </h1>
            </div>
            <label htmlFor="Title" className="text-[#8E2571] font-bold">
              Title
            </label>
            <input
              type="text"
              name="Title"
              id="Title"
              className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <label htmlFor="Description" className="text-[#8E2571] font-bold">
              Description
            </label>
            <input
              type="text"
              name="Description"
              id="Description"
              className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <div className="flex flex-col w-64 space-y-2 relative">
              <label htmlFor="status" className="font-bold text-[#8E2571]">
                Status
              </label>
              <div className="relative">
                <select
                  id="status"
                  className="bg-pink-100 text-black px-4 py-2 rounded-lg appearance-none w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select an option
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black">
                  ▼
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="p-2 mt-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Save
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
export default NewIssue;
