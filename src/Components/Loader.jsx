import { RingLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      <RingLoader className="w-24" color="#36d7b7" />
    </div>
  );
};

export default Loader;
