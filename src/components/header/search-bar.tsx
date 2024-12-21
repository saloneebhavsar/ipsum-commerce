import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form>
      <div className="flex items-center justify-between bg-white">
        <input
          type="search"
          placeholder="Search by keyword, brand or SKU..."
          className="w-64 py-2 pl-4 pr-10 text-sm"
        />
        <button type="submit" className="p-2" aria-label="Submit search">
          <Search className="w-5 text-black" />
        </button>
      </div>
    </form>
  );
}
