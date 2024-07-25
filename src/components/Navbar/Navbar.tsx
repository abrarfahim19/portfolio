import { MenuItems } from "../MenuItems";
import { ModeToggle } from "../ModeToggle";

export const Navbar = () => {
  return (
    <header className="container flex h-16 items-center justify-between gap-4 border-b-2 border-gray-400">
      <div className="flex items-center justify-center">
        {/* <Logo /> */}
        <h1 className="text-2xl font-extrabold">AT</h1>
      </div>
      <div className="flex items-center gap-2 md:flex-row-reverse">
        <ModeToggle />
        {/* <p>Menu</p> */}
        <MenuItems />
      </div>
    </header>
  );
};
