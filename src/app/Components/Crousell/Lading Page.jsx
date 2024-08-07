"use client";
import Top_Img from "@/data/Home_Img";
import Seasons_Now_Img from "@/data/Seasons_Now";
import Rekomend_Img from "@/data/rekomend_Img";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AddCollection from "./addCollection";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import Link from "next/link";
import SkeletonCard from "../cardSkeleton";
import LandingSkeleton from "../skeleton";

const Home_Page = ({ datas, type, isLoading }) => {
  const [dataImg, setDataImg] = useState(Top_Img);
  console.log(datas);

  useEffect(() => {
    switch (type) {
      case "Trend Up":
        setDataImg(Top_Img);
        break;
      case "This Season":
      case "Top":
        setDataImg(Seasons_Now_Img);
        break;
      case "Season Coming":
        setDataImg(Rekomend_Img);
        break;
      default:
        setDataImg(Top_Img);
        break;
    }
  }, [type]);

  return (
    <Swiper
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -600],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[Navigation, Autoplay, EffectCreative]}
    >
      {datas &&
        datas?.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[280px] md:h-svh">
              {isLoading && <LandingSkeleton />}
              <div className=" relative images h-full md:static">
                <img
                  src={dataImg[index % dataImg.length].img}
                  className="md:brightness-50 brightness-[0.7] object-cover object-center w-svw h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t h-full from-[#0E0E0E] to-transparent z-10 md:-bottom-1 bottom-0"></div>
              </div>
              <div className="text-white flex items-start justify-end flex-col mx-auto md:w-4/5 absolute z-20 inset-0 md:items-start md:justify-center md:mb-8 md:text-xl">
                <div className="hidden md:block space-y-2">
                  <p className="md:text-lg md:text-slate-50 ">
                    Duration: {data.duration}
                  </p>
                  <p className="flex items-center space-x-2">
                    ⭐ {data.score}
                    {data.genres.map((genre, I) => (
                      <span className="ms-2" key={I}>
                        {I > 0 ? `| ${genre.name}` : genre.name}
                      </span>
                    ))}
                  </p>
                  <Link
                    href={`/pages/detail-anime/${data.mal_id}`}
                    className="-mb-2 block font-bold text-4xl text-white"
                  >
                    {data.title}
                  </Link>
                  <p className="w-1/2 leading-relaxed text-lg font-medium text-gray-300 ">
                    {dataImg[index % dataImg.length].synopsis}
                  </p>
                </div>
                <div className="">
                  <AddCollection
                    anime_images={data.images?.jpg.image_url}
                    anime_title={data.title}
                    anime_mal_id={data.mal_id}
                    anime_episodes={data.episodes}
                    anime_rating={data.rating}
                    anime_status={data.status}
                    anime_type={data.type}
                  />
                </div>
                <Link
                  href={`/pages/detail-anime/${data.mal_id}`}
                  className="mb-4 mx-4 block font-semibold text-lg text-white md:hidden"
                >
                  {data.title}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Home_Page;
