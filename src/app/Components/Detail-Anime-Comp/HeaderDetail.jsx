const HeaderDetail = ({ dataAnime }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full m-0.5 text-center text-white md:mb-6">
      <h1 className="text-2xl font-bold leading-snug md:mt-8 md:mb-2">
        {dataAnime.title}
      </h1>
      <span className="text-xs my-2">
        {dataAnime.title_japanese} | {dataAnime.status}
      </span>
    </div>
  );
};

export default HeaderDetail;
