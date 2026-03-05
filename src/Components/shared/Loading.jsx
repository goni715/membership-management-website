// import { ThreeCircles } from "react-loader-spinner";

// export default function Loading() {
//   return (
//     <div className="h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
//       <ThreeCircles
//         visible={true}
//         color="#37C174"
//         width={600}
//         ariaLabel="three-circles-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//       />
//     </div>
//   );
// }

import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="h-screen bg-black/10 fixed inset-0 z-[999] flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
