import React from "react";
import { rec_channels, top_channels } from "@/data/mock-data";
import { RiMovieLine } from "react-icons/ri";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

function SideMenu() {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#efeff1] dark:bg-[#1f1f23] overflow-y-scroll pb-20">
      {/* Recommended Channels */}
      <div>
        <p className="hidden xl:flex uppercase font-bold text-sm pb-4">
          Recommended Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>

      {/* Recommended Channel icon mapping */}
      {rec_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div>
            <Image
              src={item.avatar}
              width={"50"}
              height={"50"}
              alt={item.username}
            />
          </div>

          {/* Channel name/icon/dot/rank */}
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p className="ml-2">{item.username}</p>
              <p className="text-gray-400 ml-2">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot color="red" size={40} /> {item.rank}K
            </p>
          </div>
        </div>
      ))}

      {/* Top Channels */}
      <div>
        <p className="hidden xl:flex uppercase font-bold text-sm py-4">
          Top Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>

      {/* Top Channel icon mapping */}
      {top_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div>
            <Image
              src={item.avatar}
              width={"50"}
              height={"50"}
              alt={item.username}
            />
          </div>

          {/* Top name/icon/dot/rank */}
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p className="ml-2">{item.username}</p>
              <p className="text-gray-400 ml-2">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot color="red" size={40} /> {item.rank}K
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideMenu;
