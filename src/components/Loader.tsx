import React from "react";

type BoxProps = { className?: string; width?: string; height?: string };
const Box: React.FC<BoxProps> = ({
  className = "",
  width = "w-full",
  height = "h-4",
}) => (
  <div
    className={`animate-pulse bg-gray-100 rounded-md ${width} ${height} ${className}`}
  />
);

export const SkeletonStatsCard: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-36">
    <div className="flex justify-start items-center w-auto">
      <Box width="w-24" height="h-4" className="mr-3" />
      <div className="p-2 rounded-lg bg-gray-100 animate-pulse">
        <div className="w-5 h-5 bg-gray-200 rounded" />
      </div>
    </div>
    <div className="mt-2">
      <Box width="w-24" height="h-8" />
      <Box width="w-32" height="h-3" className="mt-2" />
    </div>
  </div>
);

export const SkeletonLargeCard: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
    <Box width="w-40" height="h-5" />
    <Box width="w-56" height="h-3" className="mt-2 mb-4" />
    <div className="text-center py-10">
      <Box width="w-64 mx-auto" height="h-10" />
    </div>
  </div>
);

export const SkeletonBookingItem: React.FC = () => (
  <div className="overflow-hidden bg-white border shadow-sm border-gray-100 p-4 rounded-lg mt-3 text-black flex flex-col w-full">
    <div className="flex justify-between items-center w-full mb-2">
      <Box width="w-40" height="h-6" />
      <Box width="w-24" height="h-6" />
    </div>
    <div className="flex justify-between w-full text-gray-500">
      <div>
        <Box width="w-24" height="h-4" className="mb-2" />
        <Box width="w-16" height="h-4" />
      </div>
      <div>
        <Box width="w-28" height="h-4" className="mb-2" />
        <Box width="w-36" height="h-4" />
      </div>
      <div>
        <Box width="w-24" height="h-4" className="mb-2" />
        <Box width="w-24" height="h-4" />
      </div>
    </div>
  </div>
);

export const SkeletonCalendarContainer: React.FC = () => (
  <div className="p-4 bg-white rounded-lg shadow-xl mt-6 w-full max-w-[850px] mx-auto">
    <Box width="w-full" height="h-10" className="mb-4" />
    <Box width="w-full" height="h-[28rem]" />
  </div>
);
