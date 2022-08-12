import {BrowserRouter as Router , Routes, Route, Navigate} from 'react-router-dom'
import PrivacyPolicy from './Components/Pages/PrivacyPolicy.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
          
          {/* Default Route */}
          <Route path="*" element={<Navigate to="/privacy-policy"/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
