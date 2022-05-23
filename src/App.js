import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import Articles from './containers/Articles';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <Articles />
      </UserProvider>
    </div>
  );
}

export default App;
