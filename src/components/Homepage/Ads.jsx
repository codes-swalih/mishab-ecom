import React from "react";
import { GoArrowRight } from "react-icons/go";

function Ads() {
  return (
    <div className=" flex items-center gap-2">
      <div className=" w-1/2 h-auto flex flex-col gap-2">
        <div className=" w-full h-40 rounded-xl bg-gray-400">
          <img
            src="https://img.freepik.com/free-photo/futuristic-portrait-young-girl-with-high-tech_23-2151133517.jpg?t=st=1728513197~exp=1728516797~hmac=f96b51ac3d2efe7f3822943dc4a09c48471bc0802cd1bb32b60e73f32f50cc33&w=1060"
            className=" w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className=" w-full h-40 rounded-xl bg-gray-400">
          <img
            src="https://img.freepik.com/free-photo/stylish-young-man-earphones-against-wall_23-2147747795.jpg?t=st=1728513053~exp=1728516653~hmac=b29332f597fc632f3b3731901102983c0bbebf9379c3db25ca19e80c4158a11d&w=1800"
            className=" w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
      <div className=" w-1/2 h-[260px] rounded-xl bg-gray-400">
        <img
          src="https://img.freepik.com/free-photo/high-tech-portrait-young-girl-with-futuristic-style_23-2151133629.jpg?t=st=1728513105~exp=1728516705~hmac=38e98aaf7674a25e8acee1f302095c2640ef06bfca1058afb3809fc748a04628&w=826"
          className=" w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
}

export default Ads;
