import profile from "/avatar.png";

function App() {
  return (
    <section className="bg-black min-h-[100vh]">
      <div className="w-[500px] bg-red-100 mx-auto">
        <div className="p-20">
          <div className="bg-slate-600 h-44 rounded-2xl relative">
            <div className="bg-slate-600 pl-4 pt-4 rounded-2xl bg-[#00000000]">
              <div className="bg-red-500 absolute rounded-2xl px-4 py-2">
                CONTENT
              </div>
            </div>
            <div className="absolute bottom-0 right-0 mr-4 mb-4 rounded-xl bg-red-500 p-2">
              INI
            </div>
          </div>
        </div>
        <div className="bg-slate-50 w-[100px] h-[100px] rounded-full translate-x-[200px] -translate-y-[130px]">
          <img
            src={profile}
            alt=""
            className="rounded-full w-[100px] h-[100px]"
          />
        </div>
        <div className="">
          <div className="bg-blue-300 mx-20 px-10 py-5">Content Here</div>
        </div>
      </div>
    </section>
  );
}

export default App;
