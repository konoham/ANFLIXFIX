import Image from "next/image";
import Link from "next/link";

const Card = ({ idAnime, image, title, year, score, url }) => {
  console.log("🚀 ~ Card ~ { idAnime, image, title, year, score, url }:", {
    idAnime,
    image,
    title,
    year,
    score,
    url,
  });

  return (
    <Link href={`${idAnime}`}>
      <div className="relative h-auto max-h-[150px] w-auto max-w-full md:max-h-[300px]">
        <Image
          className="card h-[150px] w-[105px] rounded-lg object-cover md:h-[200px] md:w-[135px]"
          src={image}
          alt="poster"
          width={113}
          height={150}
        />
        <div className="absolute inset-0 mt-auto text-xs text-[rgb(225,225,225)]">
          <div className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent px-1 pb-2">
            <p className="truncate whitespace-nowrap tracking-wide text-white">
              {title}
            </p>
            {year && (
              <span className="text-[.65rem]">
                {year}, {score}
              </span>
            )}
            {/* {anime.genres.map((anime) => (
              <span key={anime.mal_id} className="mx-1 text-[.75rem]">
                {anime.name}
              </span>
            ))} */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
