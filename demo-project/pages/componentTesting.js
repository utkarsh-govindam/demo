import DetailsCard from "../components/Dashboard/detailsCard/detailsCard";
import ClassesCard from "../components/dashboard/classesCard/classesCard";
import React from "react";

const ComponentTesting = () => {
	return (
		<div>
			<div className="container">
				<div className="p-4">
					<DetailsCard />
				</div>
				<div className="p-4">
					<ClassesCard />
				</div>
			</div>
		</div>
	);
};

export default ComponentTesting;
