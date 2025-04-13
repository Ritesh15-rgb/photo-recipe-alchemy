
import { Menu, Search, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Menu className="h-6 w-6" />
      </button>
      <Link to="/" className="text-xl font-bold">
        Springy Salads
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/create-recipe" className="p-2 rounded-full hover:bg-gray-100">
          <Upload className="h-6 w-6" />
        </Link>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
