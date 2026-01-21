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
        <img src={src} alt={alt} />
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

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-brand-600">
        <div className="flex items-center justify-between h-20.5 px-20.5">
          {/* Brand Logo */}
          <div className="shrink-0">
            <img src={logo} alt="Logo" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <IconButton
              src={calculator}
              alt="calculator"
              tooltip="Budgeting"
              onClick={() => setIsBudgetingModalOpen(true)}
            />
            <IconButton
              src={calendar}
              alt="calendar"
              tooltip="Calculator"
              onClick={() => setIsCalendarDrawerOpen(true)}
            />
            <IconButton src={search} alt="search" tooltip="Search activity" />
            <IconButton src={wallet} alt="wallet" tooltip="Payout center" />
            <IconButton src={shop} alt="shop" tooltip="Marketplace" />
            <IconButton src={Avatar} alt="avatar" tooltip="Dylan Frank" />
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <nav>
        <div className="flex justify-between flex-wrap items-center py-3.5 px-20.5 border-b border-gray-100">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`
                flex items-center gap-2 px-8 py-2.5 rounded-lg transition-all duration-200
                ${
                  activeTab === item.id
                    ? "text-brand-600 bg-brand-500/15 font-semibold"
                    : "text-[#3D3D3D] text-sm"
                }
              `}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-5 h-5 ${
                  activeTab === item.id ? "opacity-100" : "opacity-70"
                }`}
              />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Budgeting Modal */}
      <Modal
        open={isBudgetingModalOpen}
        onClose={() => setIsBudgetingModalOpen(false)}
        className="w-full max-w-2xl"
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
