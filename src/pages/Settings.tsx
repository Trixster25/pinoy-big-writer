import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";
import { useSoundContext } from "../layouts/SoundProvider";

function Settings() {
  const { toggleMusic, toggleClickSound, musicEnabled, clickEnabled } =
    useSoundContext();

  return (
    <div className="w-screen h-screen flex flex-col items-center background p-8">
      <div className="flex items-center justify-center">
        <span
          className="text-5xl w-fit bg-black/50 px-6 py-3 rounded-t-3xl outlined-text"
          style={{ fontFamily: "Arco" }}
        >
          Settings
        </span>
      </div>
      <div className="flex-1 bg-[#903145] w-[60%] rounded-xl flex  flex-col items-center gap-8 p-8">
        <div className="h-fit flex items-center justify-around bg-black/25 px-4 py-2 rounded-xl min-w-[50%]">
          <span className="text-2xl text-white" style={{ fontFamily: "Arco" }}>
            Music
          </span>
          <button
            className={`px-4 py-2 rounded-xl font-semibold ${
              musicEnabled ? "bg-green-500" : "bg-red-500"
            } text-white border-black`}
            onClick={toggleMusic}
          >
            {musicEnabled ? "On" : "Off"}
          </button>
        </div>
        <div className="h-fit flex items-center justify-around bg-black/25 px-4 py-2 rounded-xl min-w-[50%] mt-4">
          <span className="text-2xl text-white" style={{ fontFamily: "Arco" }}>
            Sound
          </span>
          <button
            className={`px-4 py-2 rounded-xl font-semibold ${
              clickEnabled ? "bg-green-500" : "bg-red-500"
            } text-white border-black`}
            onClick={toggleClickSound}
          >
            {clickEnabled ? "On" : "Off"}
          </button>
        </div>
        <span className="text-2xl text-white" style={{ fontFamily: "Arco" }}>
          Credits:
        </span>
        <div className="flex items-start justify-around w-full">
          <div className="flex flex-col gap-4">
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
            <span className="text-white text-xl" style={{ fontFamily: "Arco" }}>
              Font: Arco
            </span>
            <span className="text-white text-xl" style={{ fontFamily: "Arco" }}>
              Music & SFX: Pixabay
            </span>
            <span className="text-white text-xl" style={{ fontFamily: "Arco" }}>
              Graphics: Canva
            </span>
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
