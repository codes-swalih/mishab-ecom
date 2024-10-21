import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fe54551d9-cdaa-4e56-8e2f-dfcc23e9d473_1.729b3cbd6af8d0884d25343b9d8940bd.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1&ipt=79e65e5c4b45b9f9e236bae68a6960779e7ddf7ac44f5f12479fe852547a2d6a&ipo=images",
      title: "Headphone",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscan-design.com%2Fwp-content%2Fuploads%2F2022%2F08%2F875a.jpg&f=1&nofb=1&ipt=7ecf11d23daf987aaa30af62534267e28618edb35ed5447d5fa7e04678021382&ipo=images",
      title: "Furnitures",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.netshoes.com.br%2Fprodutos%2Fsmartwatch-iwo-ultra-8-serie-8-watch8-esportivo-nfc-191-tela-amoled-touch-screen%2F42%2FQNU-0197-042%2FQNU-0197-042_zoom1.jpg%3Fts%3D1668456737&f=1&nofb=1&ipt=77660122b939cdcb75027098bdf6108392add04471a0e641655b95a699c0f19f&ipo=images",
      title: "Smartwatch",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcc%2F56%2F08%2Fcc5608008ff38d5a5484eb7b2d2e38f5.jpg&f=1&nofb=1&ipt=86142f73778be2fcc459a6f69fa07170fa2728a7e3a5c4d92cc2b29ecf3ef842&ipo=images",
      title: "Shoes",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fproduct-images.therealreal.com%2FCHA217183_3_enlarged.jpg&f=1&nofb=1&ipt=dddcf930456e1ca0dcdfda08890f806588663aa9ccd34f12075a6a1d4c98c88e&ipo=images",
      title: "Bag packs",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71Linf%2BGHuL.jpg&f=1&nofb=1&ipt=72093757ed16b0327c02a91d474a360fa6937257265f1b791d3949b0c17d87cf&ipo=images",
      title: "Electronics",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fe54551d9-cdaa-4e56-8e2f-dfcc23e9d473_1.729b3cbd6af8d0884d25343b9d8940bd.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1&ipt=79e65e5c4b45b9f9e236bae68a6960779e7ddf7ac44f5f12479fe852547a2d6a&ipo=images",
      title: "Headphone",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscan-design.com%2Fwp-content%2Fuploads%2F2022%2F08%2F875a.jpg&f=1&nofb=1&ipt=7ecf11d23daf987aaa30af62534267e28618edb35ed5447d5fa7e04678021382&ipo=images",
      title: "Furnitures",
    },
    // {
    //   image:
    //     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.netshoes.com.br%2Fprodutos%2Fsmartwatch-iwo-ultra-8-serie-8-watch8-esportivo-nfc-191-tela-amoled-touch-screen%2F42%2FQNU-0197-042%2FQNU-0197-042_zoom1.jpg%3Fts%3D1668456737&f=1&nofb=1&ipt=77660122b939cdcb75027098bdf6108392add04471a0e641655b95a699c0f19f&ipo=images",
    //   title: "Smartwatch",
    // },
    // {
    //   image:
    //     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcc%2F56%2F08%2Fcc5608008ff38d5a5484eb7b2d2e38f5.jpg&f=1&nofb=1&ipt=86142f73778be2fcc459a6f69fa07170fa2728a7e3a5c4d92cc2b29ecf3ef842&ipo=images",
    //   title: "Shoes",
    // },
    // {
    //   image:
    //     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcc%2F56%2F08%2Fcc5608008ff38d5a5484eb7b2d2e38f5.jpg&f=1&nofb=1&ipt=86142f73778be2fcc459a6f69fa07170fa2728a7e3a5c4d92cc2b29ecf3ef842&ipo=images",
    //   title: "Shoes",
    // },
  ];

  return (
    <div className=" flex flex-col gap-5 ">
      <h1 className=" text-2xl font-bold hidden md:block">Categories</h1>
      <div className=" w-full  md:py-10 md:px-10 grid grid-cols-4 md:flex overflow-scroll  items-center gap-2  md:gap-y-5 md:gap-5 no-scrollbar">
        {categories.map((items, index) => {
          return (
            <CategoryCard key={index} image={items.image} title={items.title} />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
