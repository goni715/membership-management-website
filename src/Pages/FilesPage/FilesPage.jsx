import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useGetToolCategoriesQuery,
  useGetVideosOrFilesQuery,
} from "@/redux/features/auth/toolsApi";
import { getRandomColor } from "@/utils";
import Loading from "@/Components/shared/Loading";
import FileFrame from "@/Components/shared/FileFrame";

const FilesPage = () => {
  const { data, isLoading } = useGetToolCategoriesQuery();
  const [activeCategory, setActiveCategory] = useState(null);

  const [params, setParams] = useState(null);

  // Set params when data is ready
  useEffect(() => {
    if (data?.tools?.[0]?._id) {
      setParams({
        id: data.tools[0]._id,
        type: "video",
      });
      setActiveCategory(data?.tools[0]?._id);
    }
  }, [data]);

  const { data: fileData, isLoading: videoLoading } = useGetVideosOrFilesQuery(
    params,
    { skip: !params }
  );

  const handleClick = (id) => {
    setParams({ id, type: "file" });
  };

  if (isLoading || videoLoading) {
    return <Loading />;
  }

  const slidesToShowCount = Math.min(data?.tools?.length || 5, 5);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowCount,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto text-white">
      <p className="text-center text-4xl font-bold pt-10">Files</p>
      <p className="text-center mt-2">Home/Files</p>

      <div className="w-full  mx-auto mt-20">
        <h2 className="text-2xl font-medium pb-5">Category</h2>
        <Slider {...settings}>
          {data?.tools?.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className={`group h-40 flex flex-col ${
                  activeCategory == item?._id && "border-2"
                } items-center justify-center rounded-lg shadow-lg text-white ${getRandomColor(
                  index
                )} cursor-pointer transition-transform transform`}
                onClick={() => {
                  handleClick(item._id);
                  setActiveCategory(item?._id);
                }}
              >
                <div className="p-4 rounded-2xl group-hover:scale-125 transition-transform transform duration-500">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-lg font-semibold">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <p className="text-center text-xl font-semibold mt-10">
        Emotional Wellbeing
      </p>
      <p className="mt-20">Showing {fileData?.files?.length || 0} result</p>
      <div>
        <FileFrame files={fileData?.files} />
      </div>
    </div>
  );
};

export default FilesPage;
