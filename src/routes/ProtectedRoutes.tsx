import Loader from '@/components/Loaders/Loader';
import useUser from '@/hooks/useUser';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type TProtectedRoute = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Loader/>
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

//   // Example block check
//   if (user.) {
//     return <div>Your account has been blocked. Please contact support.</div>;
//   }

  return <>{children}</>;
};

export default ProtectedRoute;
