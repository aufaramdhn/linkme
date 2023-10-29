import LinkCard from "./components/LinkCard";
import profile from "/avatar.png";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <section className="bg-black">
      <div className="w-[500px] bg-white mx-auto min-h-[120vh]">
        <div className="p-20">
          <div className="relative bg-slate-600 h-44 rounded-2xl">
            <div className="relative top-0 left-0 w-[118px] h-[48px] bg-transparent rounded-br-2xl inverted-border">
              <div className="absolute flex items-center justify-center gap-2 px-3 py-1 bg-red-500 rounded-xl top-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h4 className="font-normal text-gray-100 text-l">Hire me.</h4>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 p-2 mb-2 mr-2 bg-red-500 rounded-xl">
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
        <div className="mb-10 -mt-[7rem] text-center font-bold text-xl">
          <h1>Aufa Ramadhan</h1>
        </div>
        <LinkCard />
      </div>
    </section>
  );
}

export default App;
