import logo from "../../../assets/icons/logo.svg";

import calculator from "../../../assets/icons/calculator.svg";
import calendar from "../../../assets/icons/calendar.svg";
import search from "../../../assets/icons/search-status.svg";
import wallet from "../../../assets/icons/wallet-2.svg";
import shop from "../../../assets/icons/shop.svg";
import Avatar from "../../../assets/icons/Avatar.svg";

const Navbar = () => {
  const IconButton = ({
    src,
    alt,
    tooltip,
  }: {
    src: string;
    alt: string;
    tooltip: string;
  }) => (
    <div className="relative group">
      <div className="text-gray-600 cursor-pointer" role="button">
        <img src={src} alt={alt} />
      </div>
      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 p-2 bg-gray-900 text-gray-100 font-light text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
        {tooltip}
        {/* Arrow */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  );

  return (
    <nav className="bg-brand-600">
      <div className="flex items-center justify-between h-20.5 px-20.5">
        {/* Brand Logo */}
        <div className="shrink-0">
          <img src={logo} alt="Logo" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <IconButton src={calculator} alt="calculator" tooltip="Budgeting" />
          <IconButton src={calendar} alt="calendar" tooltip="Calculator" />
          <IconButton src={search} alt="search" tooltip="Search activity" />
          <IconButton src={wallet} alt="wallet" tooltip="Payout center" />
          <IconButton src={shop} alt="shop" tooltip="Marketplace" />
          <IconButton src={Avatar} alt="avatar" tooltip="Dylan Frank" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
