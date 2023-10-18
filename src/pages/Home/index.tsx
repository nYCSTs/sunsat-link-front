import { Navigate } from 'react-router-dom';

const Home = () => {
  const isAuthenticated = true;
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace={true} />
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default Home;