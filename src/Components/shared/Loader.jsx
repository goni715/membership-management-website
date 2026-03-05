import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
