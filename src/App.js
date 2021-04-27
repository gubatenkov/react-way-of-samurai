import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'



const App = () => {
  return (
    <div className="app-wrap">
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__inner">
          <Sidebar />
          <Profile />
          </div>
        </div>
      </main>
    </div>
  );
}



export default App;
