import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  useGetToolCategoriesQuery,
  useGetVideosOrFilesQuery,
} from "@/redux/features/auth/toolsApi";
import Loading from "@/Components/shared/Loading";
import VideoFrame from "@/Components/shared/VideoFrame";
import { getRandomColor } from "@/utils";

const VideosPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

  const [params, setParams] = useState({});

  const { data, isLoading } = useGetToolCategoriesQuery();

  const { data: videoData, isLoading: videoLoading } =
    useGetVideosOrFilesQuery(params);

  const handleClick = (id) => {
    setParams({ id, type: "video" });
  };

  if (isLoading || videoLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto text-white">
      <p className="text-center text-4xl font-bold pt-10">Videos</p>
      <p className="text-center mt-2">Home/Videos</p>

      <div className="w-full  mx-auto mt-20">
        <Slider {...settings}>
          {data?.tools?.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className={`h-40 flex flex-col items-center justify-center rounded-lg shadow-lg text-white ${getRandomColor()} cursor-pointer transition-transform transform hover:scale-105 duration-300`}
                onClick={() => handleClick(item._id)}
              >
                <div className="p-4 rounded-2xl">
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

      <p className="mt-20">Showing {videoData?.videos?.length || 0} result</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-2 md:px-0">
        {videoData?.videos?.map((video) => (
          <VideoFrame key={video?._id} video={video} />
        ))}
      </div>
      <div>
        {videoData?.videos?.length === 0 && (
          <div>
            <p className="text-center text-lg text-gray-400">
              No videos to display.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosPage;
