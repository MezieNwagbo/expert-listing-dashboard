import home from "../../../../assets/icons/home_icon.svg";

const OverviewCard = () => {
  return (
    <div className="w-101.75 border border-[#e4e4e4] rounded-2xl p-4 mx-auto my-6 flex justify-between items-center">
      <div>
        <div>
          <img src={home} alt="home" />
          <span>Listings Overview</span>
        </div>

        <div>View all</div>
      </div>
    </div>
  );
};

export default OverviewCard;
