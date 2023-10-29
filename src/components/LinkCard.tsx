import linkcard from "../services/LinkCard.json";

export default function LinkCard() {
  return (
    <>
      {linkcard.map((link, index) => (
        <div className="w-[350px] mx-auto" key={index}>
          <button className="flex items-center justify-center w-full gap-3 px-10 py-5 mb-6 rounded shadow-md bg-slate-100">
            <i className={`${link.logo} text-2xl`}></i>
            <h3 className="text-xl">{link.title}</h3>
          </button>
        </div>
      ))}
    </>
  );
}
