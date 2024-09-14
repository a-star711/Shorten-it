import Features from "@/app/features/page";
import Pricing from "@/app/pricing/page";
import Resources from "@/app/resourcess/page";
import Logo from "./Logo";

import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="border-b pt-4 px-4 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Logo />

        <div className="flex gap-6">
          <Features />
          <Pricing />
          <Resources />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2  border-gray-300">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2  bg-blue-800 hover:bg-blue-900  rounded-full text-white">
              Register
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
