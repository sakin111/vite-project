import { useAuth } from "@/lib/AuthContext";
import { Navigate, useLocation } from "react-router";
import { LoadingFallback } from "./LoadingFallBack";

interface AuthGuardProps {
    children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingFallback />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};