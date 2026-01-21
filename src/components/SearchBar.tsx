// Search bar component for filtering hosts by name
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  onSearch: (results: []) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    try {
      if (searchTerm.trim() === "") {
        const res = await fetch("/api/hosts");
        const data = await res.json();
        onSearch(data.hosts || []);
      } else {
        const res = await fetch(
          `/api/hosts/search?query=${encodeURIComponent(searchTerm)}`,
        );
        const data = await res.json();
        onSearch(data.hosts || []);
      }
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        placeholder="Zoek bij naam of status..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05d8c8] focus:border-transparent"
      />
      <button
        onClick={handleSearch}
        disabled={isSearching}
        className="px-4 py-2 bg-[#05d8c8] text-white rounded-lg hover:bg-[#04b3aa] transition-colors duration-300 shadow-md font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
        {isSearching ? "Searching..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;
