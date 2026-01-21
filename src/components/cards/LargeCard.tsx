import React from "react";
import { LargeCardProps } from "@/types/ui/card.type";

const LargeCard: React.FC<LargeCardProps> = ({
  title,
  value,
  subtext,
  children,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
    <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
    <p className="text-3xl font-bold text-gray-900 flex items-center">
      {value}
    </p>
    <p className="text-sm text-gray-500 mb-4">{subtext}</p>
    <div className="text-center py-10 text-gray-400">{children}</div>
  </div>
);

export default LargeCard;
