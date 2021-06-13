import DashboardStyles from "../styles/Dashboard.module.css";
import Link from "next/link";
import Image from 'next/image'
import React from "react";
const Navigation = ({ children }) => {
	return (
		<div className="container-fluid">
			<div className="navbarcontainer">
			<div className="row card">
				<ul className="list-unstyled d-flex justify-content-end">
					{/* <li className="">Dashoard</li> */}
					<li className=" nav-item nav-link">
						{/* <input className="form-control" type="search" aria-label="Search" /> */}
						<button className="btn" style={{background:"rgb(255 252 252)", color:"#9c9595"}} type="submit">
							<i className="fa fa-search"></i>
						</button>
					</li>
					<li className="nav-item nav-link ">
					<button className="btn" style={{background:"rgb(255 252 252)", color:"black"}} type="submit">
					<i className="fa  fa-bell"></i>
						</button>
						
					</li>
					<li className="nav-item nav-link " >
						<Image
							src="/profile.jpg"
							alt="Picture of the author"
							width={45}
							height={45}
							
						/>
					</li>
					<li className="nav-item dropdown mt-2">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							style={{color:"black"}}
						>
						
							<b >Username</b>
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							<li>
								<a className="dropdown-item" href="#">
								profile
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Settings
								</a>
							</li>
							<li>
								<hr className="dropdown-divider" />
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Terms and policy
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			</div>
			<div>
				<div className="row">
					<div className="col-md-2 p-0">
						<div className="card">
							<div className={DashboardStyles.navigation}>
								<div className={DashboardStyles.cardheading}>
								
									<img className="logo mb-2" src="./lifo.png" width={30} height={25} alt="Lifology Logo"></img> <b> LIFOLOGY</b>
									
								</div>
								<div className="card-body">
									<div className={DashboardStyles.listcontainer}>
										<ul className="list-unstyled ">
											<li className={DashboardStyles.active}>
												<i className="fa fa-home " aria-hidden="true"></i>
												<Link href="/userDashboard">&nbsp;&nbsp;Home</Link>
											</li>
											<li>
												<i className="fa fa-users" aria-hidden="true"></i>
												<Link href="/userDashboard">&nbsp;&nbsp;My Child </Link>
											</li>
											<li>
												<i className="fa fa-tools" aria-hidden="true"></i>
												<Link href="/userDashboard">&nbsp;&nbsp;Services</Link>
											</li>
											<li>
												<i className="fa fa-book" aria-hidden="true"></i>
												<Link href="/userDashboard">&nbsp;&nbsp;Career Explorer</Link>
											</li>
											<li>
												<i className="fa fa-life-ring" aria-hidden="true"></i>
												<Link href="/userDashboard">&nbsp;&nbsp;Lifology Hub</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-10">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
