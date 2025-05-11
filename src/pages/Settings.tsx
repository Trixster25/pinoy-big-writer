import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { useSoundContext } from "../layouts/SoundProvider";

function Settings() {
  const { toggleMusic, toggleClickSound, musicEnabled, clickEnabled } =
    useSoundContext();

  return (
    <div className="w-screen h-screen flex flex-col items-center background p-8">
      <div className="w-full flex items-center justify-center">
        <span
          className="text-center text-5xl w-[25%]  bg-black/50 px-6 py-3 rounded-t-3xl outlined-text"
          style={{ fontFamily: "Arco" }}
        >
          Settings
        </span>
      </div>
      <div className="flex-1 bg-[#903145] w-[60%] rounded-xl flex  flex-col items-center gap-8 p-8">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="h-fit flex items-center justify-around bg-black/25 px-4 py-2 rounded-xl min-w-[50%]">
            <span
              className="text-2xl text-white"
              style={{ fontFamily: "Arco" }}
            >
              Music
            </span>
            <button
              className={`relative w-12 h-6 rounded-full transition duration-200 ease-in-out focus:outline-none ${
                musicEnabled ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={toggleMusic}
            >
              <span
                className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                  musicEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <div className="h-fit flex items-center justify-around bg-black/25 px-4 py-2 rounded-xl min-w-[50%] mt-4">
            <span
              className="text-2xl text-white"
              style={{ fontFamily: "Arco" }}
            >
              Sound
            </span>
            <button
              className={`relative w-12 h-6 rounded-full transition duration-200 ease-in-out focus:outline-none ${
                clickEnabled ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={toggleClickSound}
            >
              <span
                className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${
                  clickEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <span className="text-2xl text-white" style={{ fontFamily: "Arco" }}>
          Credits:
        </span>
        <div className="flex items-start justify-around w-full">
          <div className="flex flex-col gap-4">
            <span
              className="text-white underline text-xl"
              style={{ fontFamily: "Arco" }}
            >
              Concept:
            </span>
            <span className="text-white text-xl" style={{ fontFamily: "Arco" }}>
              Anjeneth Mariano
            </span>
            <span className="text-white text-xl" style={{ fontFamily: "Arco" }}>
              Cher Bautista
            </span>
            <span className="text-white text-xl" style={{ fontFamily: "Arco" }}>
              Madison Reyes
            </span>
            <span className="text-white text-xl" style={{ fontFamily: "Arco" }}>
              Micaela Salvador
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span
                className="text-white underline text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Font:
              </span>
              <span
                className="text-white text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Arco
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-white underline text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Music & SFX:
              </span>
              <span
                className="text-white text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Pixabay
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-white underline text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Graphics:
              </span>
              <span
                className="text-white text-xl"
                style={{ fontFamily: "Arco" }}
              >
                Canva
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Home Button */}
      <Link to="/home">
        <motion.div
          className="w-16 h-16 bg-black/50 text-white rounded-full flex items-center justify-center cursor-pointer mt-4"
          whileHover={{ scale: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TiHome className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Settings;
