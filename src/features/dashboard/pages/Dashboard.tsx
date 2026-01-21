import Navbar from "../components/Navbar";

import SalesOverview from "../components/SalesOverview";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#FBFCFC] px-19.5 pt-3 pb-6.75">
        <h1 className="text-black-main text-xl font-semibold mb-4">
          Welcome, Ahmed
        </h1>

        <SalesOverview />
      </div>
    </>
  );
};

export default Dashboard;
