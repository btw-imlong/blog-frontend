// components/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import type { JSX } from "react";

type Props = {
  children: JSX.Element;
};

const PublicRoute = ({ children }: Props) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" />;
};

export default PublicRoute;
