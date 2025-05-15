import { MdScreenRotation } from "react-icons/md";

const RotateScreen = () => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center h-screen p-8 text-center background text-white"
      style={{ fontFamily: "Arco" }}
    >
      <MdScreenRotation size={64} style={{ marginBottom: "20px" }} />
      <h1 className="text-3xl">Please Rotate Your Screen</h1>
      <p>
        For the best experience, please view this application in landscape mode
        or on a larger screen.
      </p>
    </div>
  );
};

export default RotateScreen;
