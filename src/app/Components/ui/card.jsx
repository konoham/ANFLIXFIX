import Image from "next/image";

const Card = ({ anime }) => {
  return (
    <div className="relative h-auto max-h-[150px] w-auto max-w-full md:max-h-[300px]">
      <Image
        className="card h-[150px] w-[105px] rounded-lg object-cover md:h-full md:w-full"
        src={anime?.images?.jpg.large_image_url}
        alt="poster"
        width={113}
        height={150}
      />
      <div className="absolute inset-0 mt-auto text-xs text-[rgb(225,225,225)]">
        <div className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent px-1 pb-2">
          <p className="truncate whitespace-nowrap tracking-wide text-white">
            {anime.title_english || anime.title}
          </p>
          {anime.year && (
            <span className="text-[.65rem]">
              {anime.year}, {anime.score}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
