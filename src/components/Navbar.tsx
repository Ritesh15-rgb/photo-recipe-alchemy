
import { Book, Heart, Home, Menu, Search, Settings, Upload, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/recipes" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span>All Recipes</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>My Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
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
