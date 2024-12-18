import "./Dashboard.css"

import Navbar from "../../components/Navbar/Navbar"

const Dashboard = () => {
	const counters = [
		{ title: "Resolved", counter: 0, href: "#" },
		{ title: 'Pending', counter: 0, href: "#" },
		{ title: 'New', counter: 0, href: "#" }
	]


	return (
		<>
			<Navbar />
			<div className=" d-flex justify-content-center align-items-center gap-5 ">
				{counters.map((element, index) => {
					return (
						<div  key={index}>
							<a href={element.href} className=" text-decoration-none">
								<p className=" text-center text-decoration-none gap-2" id="resolved-counter">{element.counter}</p>
								<p className="rLabel">{element.title}</p>
							</a>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Dashboard;
