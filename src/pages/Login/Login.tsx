// import { invoke } from '@tauri-apps/api/core';
import './Login.css'
import { useState } from 'react';





const Login = () => {

	const [form, setForm] = useState(
		{
			username: "",
			password: ""
		}
	)

	const handleSubmit = () => {
		// await invoke('')
	}

	return (

		<div className=" d-flex justify-content-center align-items-center formWrapper bg-primary rounded-5">
			<div className="form p-7">
				<p className="subtitle text-black">
					Log in now, or<span> later!</span>
				</p>
				<h1 className=" text-center text-black">
					Request<span>Tracker</span>
				</h1>
				{/* <!-- Username textbox --> */}
				<div className="input-group mt-5">
					<input
						id="username"
						name="username"
						className="form-control rounded-3 border-0 text-black h-100 w-100 mb-4"
						type="text"
						placeholder="Username"
						onChange={(e) => {
							setForm({ ...form, username: e.target.value });
						}}
					/>


					{/* <!-- Password textbox --> */}

					<input
						id="username"
						name="username"
						className="form-control rounded-3 border-2 border-light text-black h-100 w-100 mb-4"
						type="text"
						placeholder="Password"
						onChange={(e) => {
							setForm({ ...form, password: e.target.value });
						}}
					/>
				</div>
				{/* <!-- login button --> */}
				<div className=' w-100 justify-content-center d-flex'>
					<button className="btn btn-primary" id="btnLogin" onClick={handleSubmit}>
						login
					</button>
				</div>
				{/* <!-- error text --> */}
				<p className="errortext" id="errorLogin"></p>
			</div>
		</div>
	);

}


export default Login;