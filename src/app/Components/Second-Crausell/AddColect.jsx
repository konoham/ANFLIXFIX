"use client";

import { handleColection } from "@/app/global/global-func/func";
import { useCollecSucsess, useUser } from "@/app/global/global_state/Collection_State";
import { Heart, Eye } from "@phosphor-icons/react";
import Link from "next/link";

const AddColectBtn = async ({ anime_mal_id, anime_images, anime_title, anime_rating, anime_type, anime_status, anime_episodes }) => {
  const user_email = useUser((state) => state.user?.email);
  const setSucsess = useCollecSucsess((state) => state.setSucsess);
  const data = { anime_mal_id, user_email, anime_images, anime_title, anime_rating, anime_type, anime_status, anime_episodes };
  async function addCollect() {
    try {
      const Response = await handleColection(data);
      setSucsess(Response?.sucsess);
    } catch (error) {
      return console.log("error", error);
    }
  }

  return (
    <>
      {!user_email ? (
        <Link href={"/pages/Form/Sign-in"} className={`mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914] `}>
          <Heart size={16} />
        </Link>
      ) : (
        <button onClick={addCollect} className={`mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914] `}>
          <Heart size={16} />
        </button>
      )}
      <button className="mb-3 font-light text-gray-500 md:mb-1 hover:text-[#E50914]  ">
        <Eye size={16} />
      </button>
    </>
  );
};

export default AddColectBtn;
