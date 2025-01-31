function Main() {
  const headers = ["Title", "Desc", "Status", "User", "Count"];

  return (
    <>
      <div className="bg-[#8E2571] mt-8 px-4 py-10 max-w-[1000px] mx-auto ">
        {/* Header Section */}
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-between bg-[#edaedb] w-[1000px] px-4 py-3 rounded-lg">
            {headers.map((header) => (
              <span key={header} className="font-bold text-[#740556] text-lg">
                {header}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex justify-between items-center gap-4 mt-6">
          {headers.map((header) => (
            <div
              key={header}
              className="bg-[#edaedb] w-[150px] h-[200px] flex justify-center items-center rounded-lg shadow"
            >
              {/* Placeholder for content */}
              <span className="text-white font-semibold"></span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-16 mt-10 ">
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-3"
          >
            Delete Button
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-3"
          >
            Edit Button
          </button>
        </div>
      </div>
    </>
  );
}
export default Main;
