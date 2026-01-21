import Button from "../../../components/Button";
import Tabs from "../../../components/Tabs";

const SalesOverview = () => {
  return (
    <div className="border border-[#e4e4e4] rounded-2xl">
      <div className="flex justify-between items-center p-5.5">
        <div>
          <h3 className="text-black-main text-xl font-semibold mb-3">
            Sales Overview
          </h3>
          <p className="text-xs text-[#606060]">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <Button size="lg" variant="outline">
          View Transactions
        </Button>
      </div>

      <div>
        <div className="flex justify-end pb-3">
          <Tabs
            options={["1 Week", "1 Month", "1 Year"]}
            activeTab={"1 Year"}
            onTabChange={() => console.log("Implement set selected period")}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
