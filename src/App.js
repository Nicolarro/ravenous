import './App.css';
import Business from './components/business/Business';
import BusinessList from './components/business/BusinessList';

function App() {
  return (
    <div className="App">
      <header className="Ravenous">
        <h1>
            Ravenous Proyect
        </h1>
      </header>
      <BusinessList/>
    </div>
  );
}

export default App;
