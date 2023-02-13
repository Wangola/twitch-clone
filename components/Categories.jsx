import React from "react";
import CategoriesItem from "./CategoriesItem";

function Categories() {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Categories </span>
        we think you'll like
      </h2>
      {/* Container */}
      <div className="grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
        <CategoriesItem
          img={
            "https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB-188x250.jpg"
          }
          title="Hogwarts Legacy"
          viewers="228k"
          tag1="RPG"
        />
        <CategoriesItem
          img={"https://static-cdn.jtvnw.net/ttv-boxart/18763_IGDB-188x250.jpg"}
          title="Fallout 3"
          viewers="97"
          tag1="RPG"
          tag2="FPS"
        />
        <CategoriesItem
          img={"https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg"}
          title="Just Chatting"
          viewers="548k"
          tag1="IRL"
        />
        <CategoriesItem
          img={
            "https://static-cdn.jtvnw.net/ttv-boxart/1122982998_IGDB-188x250.jpg"
          }
          title="Dark Souls: Remastered"
          viewers="1k"
          tag1="RPG"
          tag2="Action"
        />
        <CategoriesItem
          img={"https://static-cdn.jtvnw.net/ttv-boxart/1469308723-188x250.jpg"}
          title="Software & Game Development"
          viewers="1.3k"
          tag1="IRL"
          tag2="Creative"
        />
      </div>
    </div>
  );
}

export default Categories;
