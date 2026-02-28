
// import { Button } from "@/components/ui/button";

import { Link } from "react-router";
import { NavMenu } from "./NavMenu";
import { SmNavigation } from "./SmNavigation";
import { useAuth } from "@/lib/AuthContext";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";


const Navbar = () => {
  const { user, logout, loading } = useAuth();

  return (
    <nav className="fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-lg bg-background border dark:border-slate-700/70 z-30 shadow-sm">
      <div className="flex h-full items-center justify-between px-6 md:px-8">

        <Link to="/" className="flex-shrink-0 font-bold text-xl text-[#1C6442]">
          Donezo
        </Link>

        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-4 md:gap-6">
          {user?.token? (
            <Button
              variant="outline"
              className="rounded-full px-5 py-2 text-sm md:text-base border-[#1C6442] text-[#1C6442] hover:bg-[#1C6442] hover:text-white transition-colors"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <Button
              disabled={loading}
              className="rounded-full px-5 py-2 text-sm md:text-base bg-[#1C6442] hover:bg-[#144d32] text-white flex items-center justify-center gap-2 transition-all shadow-md"
              asChild
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <Link to="/login">
                  Login
                </Link>
              )}
            </Button>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <SmNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;