"use client";
import { FetchAnime } from "@/utility/Api";
import Hero from "../content/Hero";
import useEmblaCarousel from "embla-carousel-react";

const Home_Page = () => {
  const { data, isLoading } = FetchAnime("seasons/now");
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla min-h-56 bg-primary_color" ref={emblaRef}>
      <div className="embla__container h-full w-full">
        {data?.data.map((anime, index) => (
          <div
            key={index}
            className="embla__slide flex h-full items-center justify-center bg-fuchsia-400"
          >
            <Hero key={index} anime={anime} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_Page;
