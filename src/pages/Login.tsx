import Layout from "../components/Layout";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login("thumendess@gmail.com", "123456");
    navigate("/");
  }

  return (
    <Layout>
      <div>LoginPage</div>

      <button onClick={handleLogin}>Fazer login</button>
    </Layout>
  );
};

export default LoginPage;
