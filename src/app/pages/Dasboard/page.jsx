"use client";
import { useUser } from "@/app/global/global_state/Collection_State";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const Router = useRouter();
  const user = useUser((state) => state.user?.email);

  console.log(user);
  return (
    <section className="pt-20 flex flex-col justify-center items-center bg-black h-svh">
      {user ? (
        <>
          <h1 className="text-white text-3xl font-bold ">
            Selamat datang : {user}
          </h1>
          <div className="flex gap-4 items-center">
            <Link
              href={"/Dasboard/collec_Page"}
              className="bg-blue-400 px-4 py-2"
            >
              ke koleksi
            </Link>
            <button className="bg-blue-400 px-4 py-2">ke mana</button>
          </div>
        </>
      ) : (
        Router.back()
      )}
    </section>
  );
};

export default page;
