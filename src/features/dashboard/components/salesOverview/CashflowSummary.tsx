import green_up from "../../../../assets/icons/green_up.svg";
import red_down from "../../../../assets/icons/red_down.svg";
import teal_down from "../../../../assets/icons/teal_down.svg";
import { cashflowData } from "../../data/salesData";

const CashflowSummary = () => {
  const getTrendIcon = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return green_up;
      case "down":
        return red_down;
      case "neutral":
        return teal_down;
      default:
        return green_up;
    }
  };

  const getTrendColor = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return "#10b981";
      case "down":
        return "#ef4444";
      case "neutral":
        return "#176d58";
      default:
        return "#10b981";
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 p-4 w-full">
      {cashflowData.map((item, index) => (
        <div
          key={index}
          className="border border-[#e4e4e4] rounded-2xl py-3.25 px-3.75 min-w-0"
        >
          <h5
            className="text-base sm:text-[19px] font-semibold mb-2 truncate"
            style={{ color: item.color }}
            title={item.amount}
          >
            {item.amount}
          </h5>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-1.75">
            <p className="text-[10px] text-[#3d3d3d] font-medium truncate">
              {item.label}
            </p>

            <div className="flex gap-1 items-center">
              <img
                src={getTrendIcon(item.trend)}
                alt={`${item.trend} trend`}
                className="w-3 h-3"
              />
              <p
                className="text-[10px] font-medium whitespace-nowrap"
                style={{ color: getTrendColor(item.trend) }}
              >
                {item.rate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CashflowSummary;
