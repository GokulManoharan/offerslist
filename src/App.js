import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './routes/Router'
function App() {
  return (
    <Router>
      <div className="App">
        <span>Header</span>
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
