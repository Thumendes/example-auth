import Layout from "../components/Layout";
import { useAuth } from "../context/auth";

const DashPage = () => {
  const { logout } = useAuth();

  return (
    <Layout requireAuth>
      <h1>Dash</h1>

      <button onClick={logout}>Sair</button>
    </Layout>
  );
};

export default DashPage;
