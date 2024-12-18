const links = [
	{ href: "/new/ticket", icon: " bi bi-file-plus icon text-black", text: "New Ticket" },
	{ href: "/lists/allTickets", icon: "bi bi-ticket icon text-black", text: "Tickets" },
	{ href: "/lists/myTickets", icon: "bi bi-person-lines-fill icon text-black", text: "My Tickets" },
	{ href: "/dashboard", icon: "bx bx-bar-chart icon text-black", text: "Dashboard" },
]

const Menu = () => {
	return (
		<div className="menu-bar d-flex flex-column justify-content-between overflow-scroll">
			<div className="menu">
				{/* <!-- Searchbox --> */}
				<li className="search-box">
					{/* <!-- PARA BUSCAR KB O INC --> */}
					<i className="bi bi-search icon"></i>
					<input type="text" name="Search" placeholder="Search KB, INC" />
				</li>

				<ul className=" d-flex m-0 p-0 flex-column justify-content-center icon-link-hover">
					{
						// Auto create all links (<a> tags)
						links.map((link, index) => {
							return (
								<li key={index} className="nav-link">
									<a href={link.href} >
										<i className={link.icon}></i>
										<span className="text text-black">{link.text}</span>
									</a >
								</li>
							)
						})
					}
				</ul>
			</div >
			<div className="bottom-content">
				<li className="">
					<a href="/">
						{/* <!-- bx icon --> */}
						<i className="bx bx-log-out icon"></i>
						<span className="text text-black">Logout</span>
					</a>
				</li>
			</div>
		</div >
	)
}

export default Menu;

