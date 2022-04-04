import AuthContextProvider from "./auth";

const ContextsProviders: React.FC = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default ContextsProviders;
