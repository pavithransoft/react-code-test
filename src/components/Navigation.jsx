import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navList = [
    { name: "Overview", path: "/" },
    { name: "Prices", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Feedback", path: "/" },
  ];
  return (
    <div className="sm:grid grid-cols-2 items-center hidden">
      <h1 className="px-20 lg:px-48 font-semibold text-2xl text-white">
        Startup 3
      </h1>
      <ul className="flex gap-2 lg:gap-8 xl:gap-10 text-base lg:text-lg text-white items-center font-medium">
        {navList.map((nav, index) => (
          <li key={index}>
            <NavLink
              to={nav?.path}
              className="text-white hover:text-violet-600"
            >
              {nav?.name}
            </NavLink>
          </li>
        ))}
        <button className="px-4 py-1 rounded-full bg-[#E93A7D] hover:bg-pink-500 cursor-pointer">
          Purchase
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
