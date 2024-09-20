import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppPage from './pages/AppPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<AppPage />} />
      </Routes>
    </Router>
  );
}

export default App;
