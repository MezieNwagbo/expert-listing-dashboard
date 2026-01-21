import Button from "../../../components/Button";

import overlay from "../../../assets/icons/budget_overlay.svg";
import trend_up from "../../../assets/icons/trend-up.svg";
import setting from "../../../assets/icons/setting-4.svg";
import frame from "../../../assets/icons/frame.svg";

const Budgeting = () => {
  const features = [
    {
      icon: setting,
      title: "Set up annual budgets by account category",
      description:
        "Allocate funds across income and expense lines with full visibility.",
    },
    {
      icon: trend_up,
      title: "Track actuals vs budget in real time",
      description:
        "See how your community is performing against plan, month by month.",
    },
    {
      icon: frame,
      title: "Adjust figures and forecast with ease",
      description:
        "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    },
  ];

  return (
    <div>
      {/* Image Section */}
      <div className="bg-[#0C2841] h-53.25 position-relative rounded-t-2xl flex items-center justify-center">
        <div className="position-absolute bottom-0 translate-y-3">
          <img src={overlay} alt="overlay" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:px-11.5 md:py-6">
        {/* Features List */}
        <div className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="shrink-0 mt-1">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-5 h-5"
                />
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="dark" size="lg" className="w-full">
          Create Budget
        </Button>
      </div>
    </div>
  );
};

export default Budgeting;
