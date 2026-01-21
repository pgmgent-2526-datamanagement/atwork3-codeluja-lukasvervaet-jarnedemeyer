import React from "react";
import { Filter } from "@/types/ui/filter.type";

interface FilterDropdownProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <select
      value={filter.type}
      onChange={(e) => setFilter({ type: e.target.value as Filter["type"] })}
      className="border absolute top-5 left-5 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="all">All Bookings</option>
      <option value="b2b">B2B Bookings</option>
      <option value="food">Require food</option>
      <option value="bronze">Bronze Package</option>
      <option value="silver">Silver Package</option>
      <option value="gold">Gold Package</option>
    </select>
  );
};

export default FilterDropdown;
