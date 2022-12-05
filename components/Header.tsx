import Link from "next/link";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="sticky z-9999 top-0 w-full px-8 h-16 flex gap-8 bg-stone-800 items-center">
      <Link href={"/"} passHref>
        <div className="flex items-center cursor-pointer hover:bg-stone-900 py-4 px-16 rounded-3xl transition-all">
          Home
        </div>
      </Link>
      <Link href={"documentation"} passHref>
        <div className="flex items-center cursor-pointer hover:bg-stone-900 py-4 px-16 rounded-3xl transition-all">
          Documentation
        </div>
      </Link>
    </header>
  );
};

export default Header;
