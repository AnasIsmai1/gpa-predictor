import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CGPAPredictor from "./pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CGPAPredictor />} />
            </Routes>
        </Router>
    );
}

export default App;
