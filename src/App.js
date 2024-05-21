import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import Header from './components/Header.js';
import Auth from './components/Auth.js';
import UserProfile from './components/UserProfile.js'
function App() {
  const isAuth=useSelector(state => state.auth.isAuthenticated);
  return (
    <>    
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {/* <Auth /> */}
      <Counter />
    </>

  );
}

export default App;
