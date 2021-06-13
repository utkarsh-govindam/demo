import DashboardStyles from "../styles/Dashboard.module.css";
import React from "react";

const Navigation = ({ children }) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col p-0">
					<div className="card">
						<h1>This is the app bar</h1>
					</div>
				</div>
			</div>
			<div>
				<div className="row">
					<div className="col-md-2 p-0">
						<div className="card">
							<div className={DashboardStyles.navigation}>
								<div className="card-heading">
									<h1>Lifology</h1>
								</div>
								<div className="card-body">
									<ul>
										<li>Nav1</li>
									</ul>
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
