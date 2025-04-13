
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <button className="p-2">
        <Menu className="h-6 w-6" />
      </button>
      <Link to="/">
        {/* Logo handled by surrounding component */}
      </Link>
      <button className="p-2">
        <Search className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Navbar;
