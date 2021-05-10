import { useAuth } from '../hooks/';
import Header from './Header';
import Login from './Login';
import Hero from './Hero';

export default function ProtectedPage({ children }) {
  const { token, setToken } = useAuth();

  const isLoggedIn = token;

  return (
    <>
      <Header />
      {!isLoggedIn ? (
        <>
          <Hero />
          <Login setToken={setToken} />
        </>
      ) : (
        children
      )}
    </>
  );
}
