import linkcard from "../services/LinkCard.json";
import { motion } from "framer-motion";

export default function LinkCard() {
  return (
    <>
      {linkcard.map((link, index) => (
        <div className="w-[350px] mx-auto" key={index}>
          <motion.a
            href={link.link}
            className="flex items-center justify-center w-full gap-3 px-10 py-5 mb-6 rounded shadow-md bg-slate-200"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`${link.logo} text-2xl`}></i>
            <h3 className="text-xl">{link.title}</h3>
          </motion.a>
        </div>
      ))}
    </>
  );
}
