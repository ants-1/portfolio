const listItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact"
]

function Header() {
  return (
    <div className="fixed bg-black/60 flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md text-white shadow-lg z-10">

      <ul className="flex gap-8 text-lg">
        {listItems.map((item) => (
          <li className="relative group cursor-pointer" key={item}>
            {item}
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-sky-500 via-sky-300 to-sky-100 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
