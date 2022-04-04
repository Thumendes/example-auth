import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  requireAuth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ requireAuth = false, children }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (requireAuth) {
    if (isLoading) return null;

    if (!isLoggedIn) return <Navigate to="/login" />;
  }

  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
