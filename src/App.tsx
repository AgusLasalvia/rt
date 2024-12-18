// React imoprt 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Styles
import "./App.css";

// Pages Imports
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard/>} />
			</Routes>
		</Router>
	);
}

export default App;
