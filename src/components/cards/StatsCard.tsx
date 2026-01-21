import React from "react";
import { StatsCardProps } from "@/types/ui/card.type";

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtext,
  Icon,
  iconColor,
  iconBg,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-36">
    <div className="flex justify-start items-center w-80">
      <h2 className="text-sm font-semibold text-gray-700 p-0 mr-2">{title}</h2>
      <div className={`p-2 rounded-lg ${iconBg}`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
    </div>
    <div className="mt-2">
      <p className="text-3xl font-bold text-gray-900 flex items-center">
        {value}
      </p>
      <p className="text-xs text-gray-500 mt-1">{subtext}</p>
    </div>
  </div>
);

export default StatsCard;
