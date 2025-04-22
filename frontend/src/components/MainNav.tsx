import { useAuth0 } from '@auth0/auth0-react'
import { CircleUser } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MainNav() {
    const {logout , loginWithRedirect , isAuthenticated , user}  = useAuth0(); 
    console.log(isAuthenticated)
  return (
    <div className='items-center justify-end hidden lg:flex gap-10'><ul className='flex items-center justify-center gap-10 w-full'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    {isAuthenticated ?   <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2.5 p-1.5 whitespace-nowrap cursor-pointer"><CircleUser/><span>{user?.email}</span></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={async()=> await logout()}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> : <Button onClick={()=> loginWithRedirect()}>Login</Button>  }

    </div>
  )
}

export default MainNav