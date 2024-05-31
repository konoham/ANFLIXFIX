"use client";
import Link from "next/link";
import DetailCard from "./DetailCard";
import NotFoundAnim from "./NotFoundAnim";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardDetail from "../Card-Detail/CardDetail";
import { useState } from "react";

function CardMain({ animeCM, title }) {
  const [isOpen, setIsOpen] = useState();
  const handleOpen = (anime_mal_id) => setIsOpen(anime_mal_id);
  return (
    <div className="mt-2 ">
      <h1 className="text-white font-bold text-base pt-1">{title}</h1>

      <div className="grid grid-cols-2 grid-rows-3 w-svw h-fit gap-4 ps-2 pe-2  md:pe-8 md:grid-cols-7 lg:grid-cols-10">
        {animeCM?.length === 0 ? (
          <NotFoundAnim />
        ) : (
          animeCM?.map((anime, index) => {
            return (
              <div
                key={index}
                className="w-full rounded-lg shadow Card mx-auto"
              >
                <Link
                  href={`/pages/detail-anime/${anime.mal_id}`}
                  onMouseEnter={() => handleOpen(anime.mal_id)}
                  onMouseLeave={() => handleOpen(anime.mal_id)}
                >
                  {anime.images?.jpg.image_url ? (
                    <Image
                      width={140}
                      height={200}
                      src={anime.images?.jpg.image_url}
                      className="rounded-md hover:scale-105 md:mt-4 z-10 w-auto h-auto main-transition"
                      alt={anime.title}
                    />
                  ) : (
                    <Skeleton width={140} height={200} className="rounded-md" />
                  )}
                </Link>
                {anime.title ? (
                  <h5 className="mb-2 text-base text-white w-full font-medium text-center">
                    {anime.title}
                  </h5>
                ) : (
                  <Skeleton className="mb-2 text-base text-white w-full font-medium text-start" />
                )}

                <CardDetail
                  anime_episodes={anime.episodes}
                  anime_images={anime.images?.jpg.image_url}
                  anime_mal_id={anime.mal_id}
                  anime_rating={anime.rating}
                  anime_status={anime.status}
                  anime_title={title}
                  anime_type={anime.type}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CardMain;
