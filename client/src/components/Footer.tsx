import * as React from "react";
const Footer = () => {
	return (<>
		{/* <div className="scroll-top">
			<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width=".5em" height=".5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1280"><path fill="currentColor" d="M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z" /></svg>
		</div> */}

		<div className="card footer mt-4">
			<div className="card-body" style={{padding: '.5rem 1rem'}}>
				<ul className="d-flex flex-row">
					<li><b>Star war</b> All Rights Reserved!</li>
					<li><a href="">Privacy Policy</a></li>
					<li>Copyright © 2022</li>
				</ul>
			</div>
		</div>
	</>)
}
export default Footer;