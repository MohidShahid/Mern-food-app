import { CircleUser, Menu  } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuth0 } from "@auth0/auth0-react";

function MobileNav() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="w-full flex items-start justify-between">
          <SheetTitle>Welcome to Bite Boss</SheetTitle>
          {isAuthenticated ? ( <DropdownMenu>
              <DropdownMenuTrigger className="flex bg-amber-500 gap-2.5 p-1.5"><CircleUser/> User Profile</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={async()=> await logout()}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
           <Button className="pointer" onClick={() => loginWithRedirect()}>Login</Button>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
