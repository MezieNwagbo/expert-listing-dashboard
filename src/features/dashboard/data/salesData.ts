import home from "../../../assets/icons/home_icon.svg";
import user from "../../../assets/icons/profile.svg";

export const salesData = [
  {
    month: "Jan",
    productA: 12500000, // $12.5M
    productB: 18200000, // $18.2M
    productC: 8300000, // $8.3M
  },
  {
    month: "Feb",
    productA: 15800000, // $15.8M
    productB: 22100000, // $22.1M
    productC: 11400000, // $11.4M
  },
  {
    month: "Mar",
    productA: 19200000, // $19.2M
    productB: 25600000, // $25.6M
    productC: 14700000, // $14.7M
  },
  {
    month: "Apr",
    productA: 22400000, // $22.4M
    productB: 28900000, // $28.9M
    productC: 17200000, // $17.2M
  },
  {
    month: "May",
    productA: 25600000, // $25.6M
    productB: 32400000, // $32.4M
    productC: 19800000, // $19.8M
  },
  {
    month: "Jun",
    productA: 28100000, // $28.1M
    productB: 35700000, // $35.7M
    productC: 22500000, // $22.5M
  },
  {
    month: "Jul",
    productA: 31200000, // $31.2M
    productB: 38900000, // $38.9M
    productC: 25100000, // $25.1M
  },
  {
    month: "Aug",
    productA: 29800000, // $29.8M
    productB: 36400000, // $36.4M
    productC: 23600000, // $23.6M
  },
  {
    month: "Sep",
    productA: 33500000, // $33.5M
    productB: 41200000, // $41.2M
    productC: 27800000, // $27.8M
  },
];

export const listingsData = {
  icon: home,
  title: "Listings Overview",
  stats: [
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "80" },
    { label: "Archived", value: "1k" },
  ],
};

export const usersData = {
  icon: user,
  title: "Users Overview",
  stats: [
    { label: "Total", value: "20.7k" },
    { label: "Active", value: "8.5k" },
    { label: "Inactive", value: "7.5k" },
  ],
};

interface CashflowItem {
  amount: string;
  label: string;
  color?: string;
  rate: string;
  trend: "up" | "down" | "neutral";
}

export const cashflowData: CashflowItem[] = [
  {
    amount: "₦120,000,000.00",
    label: "Total Inflow",
    color: "#4545fe",
    rate: "2.5%",
    trend: "up",
  },
  {
    amount: "₦50,000,000.00",
    label: "MRR",
    color: "#12B76A",
    rate: "2.5%",
    trend: "up",
  },
  {
    amount: "₦200,000,000.00",
    label: "Commission Revenue",
    color: "#14b8a6",
    rate: "0.5%",
    trend: "neutral",
  },
  {
    amount: "₦100,000,000.00",
    label: "GMV",
    color: "#f04438",
    rate: "0.5%",
    trend: "down",
  },
];
