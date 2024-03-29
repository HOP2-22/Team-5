import React from "react";
import { useNavigate } from "react-router-dom";
import cardImage from "../../img/ads.png";

function Card() {
  const navigate = useNavigate();
  return (
    <div
      class="rounded overflow-hidden shadow-lg mt-20 rounded-xl"
      onClick={() => {
        navigate("/blogpost");
      }}
    >
      <img class="w-full" src={cardImage} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 font-mulish">The Coldest Sunset</div>
        <p class="text-gray-700 text-base font-mulish">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-mulish text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-mulish text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 font-mulish text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}
export default Card;
