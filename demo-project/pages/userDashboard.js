import Navigation from "../components/Navigation";
import React from "react";

const UserDashboard = () => {
	return (
		<div>
			<Navigation>
				<div className="row">
					<div className="col-sm-9">
						<h1>This is the dashboard</h1>
					</div>
					<div className="col-sm-3">
						<h4>This is the virtual lifology section</h4>
					</div>
				</div>
			</Navigation>
		</div>
	);
};

export default UserDashboard;
