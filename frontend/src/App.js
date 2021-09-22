import './App.css';
import Navbar from './components/Navbar';
import JoblyRouter from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JoblyRouter />
    </div>
  );
}

export default App;
