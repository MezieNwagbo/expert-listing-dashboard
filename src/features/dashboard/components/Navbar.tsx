import { useState } from "react";
import logo from "../../../assets/icons/logo.svg";

import calculator from "../../../assets/icons/calculator.svg";
import calendar from "../../../assets/icons/calendar.svg";
import search from "../../../assets/icons/search-status.svg";
import wallet from "../../../assets/icons/wallet-2.svg";
import shop from "../../../assets/icons/shop.svg";
import Avatar from "../../../assets/icons/Avatar.svg";
import calendar_frame from "../../../assets/icons/Calender_frame.svg";

import note from "../../../assets/icons/note.svg";
import home from "../../../assets/icons/home.svg";
import user from "../../../assets/icons/user.svg";
import task from "../../../assets/icons/task.svg";
import briefcase from "../../../assets/icons/briefcase.svg";
import scroll from "../../../assets/icons/scroll.svg";

import Modal from "../../../components/Modal";
import Drawer from "../../../components/Drawer";
import Budgeting from "./Budgeting";

const Navbar = () => {
  const [isBudgetingModalOpen, setIsBudgetingModalOpen] = useState(false);
  const [isCalendarDrawerOpen, setIsCalendarDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const IconButton = ({
    src,
    alt,
    tooltip,
    onClick,
  }: {
    src: string;
    alt: string;
    tooltip: string;
    onClick?: () => void;
  }) => (
    <div className="relative group">
      <div
        className="text-gray-600 cursor-pointer"
        role="button"
        onClick={onClick}
      >
        <img src={src} alt={alt} className="w-5 h-5" />
      </div>
      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
        {tooltip}
        {/* Arrow */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  );

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: home },
    { id: "listings", label: "Listings", icon: briefcase },
    { id: "users", label: "Users", icon: user },
    { id: "request", label: "Request", icon: note },
    { id: "applications", label: "Applications", icon: scroll },
    { id: "tasks", label: "Tasks", icon: task },
  ];

  const menuItems = [
    {
      label: "Budgeting",
      icon: calculator,
      onClick: () => setIsBudgetingModalOpen(true),
    },
    {
      label: "Calendar",
      icon: calendar,
      onClick: () => setIsCalendarDrawerOpen(true),
    },
    { label: "Search activity", icon: search, onClick: () => {} },
    { label: "Payout center", icon: wallet, onClick: () => {} },
    { label: "Marketplace", icon: shop, onClick: () => {} },
    { label: "Profile", icon: Avatar, onClick: () => {} },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-brand-600">
        <div className="flex items-center justify-between h-16 sm:h-20.5 px-4 sm:px-8 lg:px-20.5">
          {/* Brand Logo */}
          <div className="shrink-0">
            <img src={logo} alt="Logo" className="h-8 sm:h-auto" />
          </div>

          {/* Desktop Icons - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <IconButton
              src={calculator}
              alt="calculator"
              tooltip="Budgeting"
              onClick={() => setIsBudgetingModalOpen(true)}
            />
            <IconButton
              src={calendar}
              alt="calendar"
              tooltip="Calendar"
              onClick={() => setIsCalendarDrawerOpen(true)}
            />
            <IconButton src={search} alt="search" tooltip="Search activity" />
            <IconButton src={wallet} alt="wallet" tooltip="Payout center" />
            <IconButton src={shop} alt="shop" tooltip="Marketplace" />
            <IconButton src={Avatar} alt="avatar" tooltip="Dylan Frank" />
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-brand-700 border-t border-brand-500">
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-brand-500/20 rounded-lg transition-colors"
                >
                  <img src={item.icon} alt={item.label} className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Navigation */}
      <nav className="bg-white border-b border-gray-100 overflow-x-auto">
        <div className="flex gap-2 sm:gap-3 lg:gap-0 lg:justify-between items-center py-3 px-4 sm:px-8 lg:px-20.5 min-w-max lg:min-w-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap
                ${
                  activeTab === item.id
                    ? "text-brand-600 bg-brand-500/15 font-semibold"
                    : "text-[#3D3D3D] hover:bg-gray-50"
                }
              `}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  activeTab === item.id ? "opacity-100" : "opacity-70"
                }`}
              />
              <span className="text-xs sm:text-sm font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Budgeting Modal */}
      <Modal
        open={isBudgetingModalOpen}
        onClose={() => setIsBudgetingModalOpen(false)}
        className="w-full max-w-2xl mx-4"
      >
        <Budgeting />
      </Modal>

      {/* Calendar Drawer */}
      <Drawer
        open={isCalendarDrawerOpen}
        onClose={() => setIsCalendarDrawerOpen(false)}
      >
        <div className="">
          {/* Calendar Content */}
          <img
            src={calendar_frame}
            alt="Calendar"
            className="w-full h-screen object-cover"
          />
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
