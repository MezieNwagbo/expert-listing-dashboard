import { useState } from "react";
import Button from "../../../../components/Button";
import Tabs from "../../../../components/Tabs";
import { salesData } from "../../data/salesData";
import SalesBarChart from "./SalesOverviewChart";
import CashflowSummary from "./CashflowSummary";
import play_icon from "../../../../assets/icons/play_icon.svg";
import back_icon from "../../../../assets/icons/back_icon.svg";

const SalesOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 Year");

  return (
    <div className="border border-[#e4e4e4] rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-4 sm:px-5.5 pt-4">
        <div>
          <h3 className="text-black-main text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Sales Overview
          </h3>
          <p className="text-xs text-[#606060]">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto sm:mb-2"
        >
          View Transactions
        </Button>
      </div>

      <div>
        <div className="flex justify-center sm:justify-end pb-1 px-4 sm:px-5.5">
          <Tabs
            options={["1 Week", "1 Month", "1 Year"]}
            activeTab={selectedPeriod}
            onTabChange={setSelectedPeriod}
          />
        </div>

        <div className="border-t border-[#e4e4e4] flex flex-col md:flex-row">
          <div className="h-60 md:h-50 md:flex-1 md:shadow-[inset_-8px_0_16px_-4px_rgba(0,0,0,0.06)] relative">
            {/* Back Icon - Left Side */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <img src={back_icon} alt="Back Icon" className="w-6 h-6" />
            </button>

            {/* Chart */}
            <SalesBarChart data={salesData} />

            {/* Play/Forward Icon - Right Side */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <img src={play_icon} alt="Play Icon" className="w-6 h-6" />
            </button>
          </div>

          {/* Cashflow Summary */}
          <div className="w-full lg:w-auto lg:min-w-87.5 lg:max-w-112.5">
            <CashflowSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
