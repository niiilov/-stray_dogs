// import { ModeToggle } from "@shared/ui/modeToggle";
import { Link } from "react-router-dom";
// import { UserDropdown } from "@features/ui/UserDropdown";

export const Navbar = () => {
  const isAuth: boolean = true;

  return (
    <div className="width sm:absolute pb-4 bg-white dark:bg-background border-b px-3 mt-9 flex items-center justify-between">
      <Link to="/" className="font-extrabold text-xl">
        Бездомные собаки
      </Link>
    </div>
  );
};
