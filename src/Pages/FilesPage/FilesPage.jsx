import React from "react";
import doc from "../../assets/images/Doc.png";
import word from "../../assets/images/Word.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import youtube from "../../assets/images/youtube.png";
import emotion from "../../assets/images/emotion.png";
import positive from "../../assets/images/positive.png";
import self from "../../assets/images/self.png";
import creativity from "../../assets/images/creativity.png";
import { MdOutlineFileDownload } from "react-icons/md";

const categories = [
  {
    name: "YouTube Live",
    icon: <img src={youtube} />,
    bgColor: "bg-[#474747]",
  },
  {
    name: "Emotional Wellbeing",
    icon: <img src={emotion} />,
    bgColor: "bg-blue-400",
  },
  {
    name: "Positive Mindset",
    icon: <img src={positive} />,
    bgColor: "bg-[#BFB86C]",
  },
  { name: "Self Awareness", icon: <img src={self} />, bgColor: "bg-[#A54E7D]" },
  {
    name: "Creativity",
    icon: <img src={creativity} />,
    bgColor: "bg-[#BFA875]",
  },
  { name: "Nutrition & Food", icon: "🥗", bgColor: "bg-[#39846A]" },
  { name: "Communication", icon: "🎤", bgColor: "bg-[#5E7599]" },
  { name: "Healthy Relationship", icon: "🤝", bgColor: "bg-[#377484]" },
  { name: "Personal Finances", icon: "🐷", bgColor: "bg-[#82995E]" },
];

const files = [
  {
    name: "Emotional Intelligence Guide.pdf",
    img: doc,
  },
  {
    name: "Emotional Intelligence Guide.pdf",
    img: word,
  },
  {
    name: "Journaling Prompts for Self-Reflection.docx",
    img: doc,
  },
  {
    name: "Emotional Intelligence Guide.pdf",
    img: word,
  },
  {
    name: "Emotional Intelligence Guide.pdf",
    img: doc,
  },
  {
    name: "Emotional Intelligence Guide.pdf",
    img: word,
  },
  {
    name: "Breathing Techniques for Relaxation.pdf",
    img: doc,
  },
];

const FilesPage = () => {
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

  const handleClick = (name) => {
    console.log(name);
  };

  return (
    <div className="container mx-auto text-white">
      <p className="text-center text-4xl font-bold pt-10">Files</p>
      <p className="text-center mt-2">Home/Files</p>

      <div className="w-full  mx-auto mt-20">
        <Slider {...settings}>
          {categories.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className={`h-40 flex flex-col items-center justify-center rounded-lg shadow-lg text-white ${item.bgColor} cursor-pointer`}
                onClick={() => handleClick(item.name)}
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-2 text-center text-lg">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <p className="text-center text-xl font-semibold mt-10">
        Emotional Wellbeing
      </p>
      <p className="mt-20">Showing 42 result</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-2 md:px-0">
        {files?.map((video, i) => {
          return (
            <div
              key={i + 1}
              className="bg-[#242424] p-4 rounded-sm cursor-pointer "
            >
              <div className="bg-[#1C1C1C] flex justify-center py-10">
                <img src={video?.img} className="" alt="" />
              </div>

              <p className="mt-2 text-[20px]">{video?.name}</p>
              <button className="bg-[#22A59A] w-full mt-2 py-2 rounded-sm flex items-center justify-center gap-2"><MdOutlineFileDownload size={20} />Download</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilesPage;
