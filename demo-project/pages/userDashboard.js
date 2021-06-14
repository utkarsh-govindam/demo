import Navigation from "../components/Navigation";
import DetailsCard from "../components/Dashboard/detailsCard/detailsCard";
import ClassesCard from "../components/dashboard/classesCard/classesCard";
import React from "react";
import MainVAssistent from "../components/dashboard/virtAssistent/mainStart";


const UserDashboard = () => {
	return (
		<Navigation>
			<div className="row">
				<div className="col-sm-9">
					<div className="p-3">
						<DetailsCard />
					</div>
					<div className="p-3">
						<ClassesCard />
					</div>
				</div>
				<div className="col-sm-3">
					<MainVAssistent/>
				</div>
			</div>
		</Navigation>
	);
};

export default UserDashboard;
