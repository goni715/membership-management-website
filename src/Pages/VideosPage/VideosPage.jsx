import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import youtube from '../../assets/images/youtube.png'
import emotion from '../../assets/images/emotion.png'
import positive from '../../assets/images/positive.png'
import self from '../../assets/images/self.png'
import creativity from '../../assets/images/creativity.png'


import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.png'
import img6 from '../../assets/images/img6.png'
import { FaPlay } from "react-icons/fa";


const categories = [
  { name: "YouTube Live", icon:<img src={youtube} />, bgColor: "bg-[#474747]" },
  { name: "Emotional Wellbeing", icon: <img src={emotion} />, bgColor: "bg-blue-400" },
  { name: "Positive Mindset", icon:<img src={positive} />, bgColor: "bg-[#BFB86C]" },
  { name: "Self Awareness", icon: <img src={self} />, bgColor: "bg-[#A54E7D]" },
  { name: "Creativity", icon:<img src={creativity} />, bgColor: "bg-[#BFA875]" },
  { name: "Nutrition & Food", icon: "🥗", bgColor: "bg-[#39846A]" },
  { name: "Communication", icon: "🎤", bgColor: "bg-[#5E7599]" },
  { name: "Healthy Relationship", icon: "🤝", bgColor: "bg-[#377484]" },
  { name: "Personal Finances", icon: "🐷", bgColor: "bg-[#82995E]" },
];

const videos = [
    {
        name : "The Science of Happiness and Wellbeing",
        views : "258",
        img : img1
    },
    {
        name : "Balancing Work, Life, and Mental Health",
        views : "683",
        img : img2
    },
    {
        name : "Self-Care Strategies for a Happier You",
        views : "258",
        img : img3
    },
    {
        name : "The Science of Happiness and Wellbeing",
        views : "258",
        img : img4
    },
    {
        name : "Emotional Intelligence: Why It Matter",
        views : "258",
        img : img5
    },
    {
        name : "Healing from Within: Strengthen Your Em",
        views : "258",
        img : img6
    },
    {
        name : "Master Your Emotions: Key to Inner Peace",
        views : "258",
        img : img1
    },
]

const VideosPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleClick = (name) => {
    console.log(name);
  };

  return (
    <div className="container mx-auto text-white">
      <p className="text-center text-4xl font-bold pt-10">Videos</p>
      <p className="text-center mt-2">Home/Videos</p>

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
          <p className="text-center text-xl font-semibold mt-10">Emotional Wellbeing</p>

      <p className="mt-20">Showing 42 result</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {
            videos?.map((video , i)=>{
                return(
                    <div key={i+1} className="bg-[#242424] p-4 rounded-sm cursor-pointer relative">
                        <img src={video?.img} className="w-full" alt="" />
                        <p className="absolute top-1/2 left-1/2 bg-[#5a5a5a] p-2 rounded-full"><FaPlay /></p>
                        <p className="mt-2 text-[20px]">{video?.name}</p>
                        <p className="text-sm text-[#C6C6C6]">{video?.views} Views</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default VideosPage;
