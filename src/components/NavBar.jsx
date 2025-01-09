import React from "react";

const NavBar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "features",
      link: "#",
    },

    {
      id: 2,
      title: "How it works",
      link: "#",
    },
    {
      id: 3,
      title: "Products",
      link: "#",
    },
    {
      id: 4,
      title: "Client Stories",
      link: "#",
    },
  ];
  return (
    <section className="bg-white pt-4 font-myFont">
      <nav>
        <div className="container flex items-center justify-between gap-3">
          <div className="flex items-center gap-7">
            <h1 className="text-xl text-black font-bold">Soudemy</h1>
            <div className="hidden md:flex">
              <ul className="flex items-center text-black">
                {NavbarMenu.map((item) => {
                  <li key={item.id} className="mr-3">
                    <a href={item.link}>{item.title}</a>
                  </li>;
                })}
              </ul>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-black font-semibold">Sign in</p>
            <button className="bg-[#FF8100] p-2 border-white rounded-full text-black font-semibold">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
