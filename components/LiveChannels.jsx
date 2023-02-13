import React from "react";
import LiveChannelItem from "./LiveChannelItem";
import Live1 from "../public/assests/live/live1.jpeg";
import Live2 from "../public/assests/live/live2.jpeg";
import Live3 from "../public/assests/live/live3.jpeg";
import Live4 from "../public/assests/live/live4.jpeg";
import Live5 from "../public/assests/live/live5.jpeg";
import Live6 from "../public/assests/live/live6.jpeg";
import Live7 from "../public/assests/live/live7.jpeg";
import Live8 from "../public/assests/live/live8.jpeg";
import Live9 from "../public/assests/live/live9.jpeg";
import Live10 from "../public/assests/live/live10.jpeg";

function LiveChannels() {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Live Channels </span>
        we think you'll like
      </h2>

      {/* Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        <LiveChannelItem
          img={Live1}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/e4d9bf96-311d-487a-b5eb-9f9a94e0f795-profile_image-70x70.png"
          title="SUPER BOWL PARTY EXTRAVAGANZA COOKIN!"
          user="Nmplol"
          game="Just Chatting"
        />
        <LiveChannelItem
          img={Live2}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/7d91bd5b-9648-4e43-91b8-1157d0d6ee60-profile_image-70x70.png"
          title="🔴LS | MAKING TIME UNTIL LEC WITH ASOL IN KOREAN SOLOQ 🔴 !MERCH !Protierlist !vod !autism !asol !13.2 !13.3 !patreon"
          user="imls"
          game="League of Legends"
        />
        <LiveChannelItem
          img={Live3}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/8d7200ea-98d1-4718-9c57-b10a051a0620-profile_image-70x70.png"
          title="LOFI 24/7 | !website !song !art !emotes"
          user="OTKnetwork"
          game="Just Chatting"
        />
        <LiveChannelItem
          img={Live4}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/jerma985-profile_image-447425e773e6fd5c-50x50.jpeg"
          title="Local Streamer stuck in a cave: sings..."
          user="Jerma985"
          game="One Hand Clapping"
        />
        <LiveChannelItem
          img={Live5}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-50x50.png"
          title="BIG Mario Kart session"
          user="Bigpuffer"
          game="Mario Kart 8 Deluxe"
        />
        <LiveChannelItem
          img={Live6}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3c347ed-1a7a-40a2-8bee-8a7c4426eb33-profile_image-50x50.png"
          title="Warzone With Subs | !MFAMShop | Code: MFAM | @NICKMERCS"
          user="NICKMERCS"
          game="Call of Duty: Warzone"
        />
        <LiveChannelItem
          img={Live7}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/38e925fc-0b07-4e1e-82e2-6639e01344f3-profile_image-70x70.png"
          title="SUB SUNDAY NOT HARRY POTTER EDITION BUT HOGWARTS LATER TONIGHT EDITION BUT UNTIL THEN HOLY VARIETY THERE ARE OTHER GAMES OUT??? WHATTTTT"
          user="LIRIK"
          game="Greedventory"
        />
        <LiveChannelItem
          img={Live8}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-50x50.png"
          title="Covert_Muffin teaching Star Wars..."
          user="JamesDoneQuick"
          game="Star Wars: Jedi Knight II - Jedi Outcast"
        />
        <LiveChannelItem
          img={Live9}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-50x50.png"
          title="Grinding"
          user="shroud"
          game="The Cycle: Frontier"
        />
        <LiveChannelItem
          img={Live10}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/958d17a9-0c82-4210-8376-7e3c00a006f5-profile_image-50x50.png"
          title="GRILLIN / CHILLEN! Steak / Burgers..."
          user="KennyGoodloe"
          game="Just Chatting"
        />
      </div>
    </div>
  );
}

export default LiveChannels;
