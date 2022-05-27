import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import CardMenu from './components/CardMenu';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <CardMenu />
    </div>
  );
}

export default App;
