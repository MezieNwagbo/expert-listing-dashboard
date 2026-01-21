import ImageGrid from "../components/imageGrid/ImageGrid";
import Navbar from "../components/Navbar";
import OverviewCard from "../components/salesOverview/OverviewCard";
import SalesOverview from "../components/salesOverview/SalesOverview";
import { listingsData, usersData } from "../data/salesData";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#FBFCFC] min-h-screen">
        {/* Max-width container for content */}
        <div className="max-w-480 mx-auto px-4 sm:px-6 md:px-10 lg:px-19.5 pt-3 pb-6.75">
          <h1 className="text-black-main text-xl md:text-2xl font-semibold mb-4">
            Welcome, Ahmed
          </h1>

          <div className="flex flex-col xl:flex-row gap-5 mb-5">
            <div className="w-full lg:flex-1">
              <SalesOverview />
            </div>

            <div className="w-full lg:w-auto space-y-5">
              <OverviewCard
                icon={listingsData.icon}
                title={listingsData.title}
                stats={listingsData.stats}
              />
              <OverviewCard
                icon={usersData.icon}
                title={usersData.title}
                stats={usersData.stats}
              />
            </div>
          </div>

          <div className="w-full">
            <ImageGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
