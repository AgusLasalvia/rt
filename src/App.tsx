import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Login from "./pages/Login/Login";

function App() {


	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/hola" element={<h1>Hola mundo</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
