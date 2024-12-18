import "./Dashboard.css"

import Navbar from "../../components/Navbar/Navbar"

const Dashboard = () => {
	const counters = [
		{ title: "Resolved", counter: 1, href: "#" },
		{ title: 'Pending', counter: 2, href: "#" },
		{ title: 'New', counter: 3, href: "#" }
	]


	return (
		<>
			<Navbar />
			<div className=" d-flex justify-content-center align-items-center counters">
				{counters.map((element, index) => {
					return (
						<div className=" " key={index}>
							<a href={element.href} className="text-decoration-none ">
								<p className=" text-center text-decoration-none  counters-number" id="resolved-counter">{element.counter}</p>
								<p className="counters-text">{element.title}</p>
							</a>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Dashboard;
