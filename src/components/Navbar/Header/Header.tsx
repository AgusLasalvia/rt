type HeaderProps = {

	toggleSidebar: () => void
}


const Header = ({ toggleSidebar }: HeaderProps) => {
	return (
		<header>
			<div className="image-text">
				<span className="image">
					{/* <!--<img src="logo.png" alt="">--> */}
				</span>

				<div className="text text-black">
					<span className="name">Request<span className=" text-primary-darker">Tracer</span></span>
					<span className="adminName" id="adminName"> username</span>
				</div>
			</div>

			{toggleSidebar ? <i className="bi bi-arrow-right-short toggle" onClick={toggleSidebar}></i> : <i className=" bi bi-arrow-left-short toggle" onClick={toggleSidebar}></i>}


		</header>
	)
}

export default Header;