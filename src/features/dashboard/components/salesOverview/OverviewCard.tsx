import caret_forward from "../../../../assets/icons/caret_forward.svg";

interface Stat {
  label: string;
  value: string | number;
}

interface OverviewCardProps {
  icon: string;
  title: string;
  stats: Stat[];
  onViewAll?: () => void;
  showViewAll?: boolean;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  icon,
  title,
  stats,
  onViewAll,
  showViewAll = true,
}) => {
  return (
    <div className="w-full lg:w-101.75 border border-[#e4e4e4] rounded-2xl overflow-hidden">
      <div className="bg-[#f9fafb] flex justify-between items-center border-b border-[#e4e4e4] p-4">
        <div className="flex items-center gap-3">
          <img src={icon} alt={title} className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-sm font-medium text-[#292929]">{title}</span>
        </div>

        {showViewAll && (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onViewAll}
          >
            <p className="text-xs text-[#4545fe] font-medium">View all</p>
            <img src={caret_forward} alt="caret_icon" className="w-3 h-3" />
          </div>
        )}
      </div>

      <div className="pb-4 pt-5 px-4 grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="text-center lg:text-left">
            <p className="text-[#525252] text-xs sm:text-sm font-medium mb-2">
              {stat.label}
            </p>
            <h3 className="text-[#141414] text-lg sm:text-xl font-semibold">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
