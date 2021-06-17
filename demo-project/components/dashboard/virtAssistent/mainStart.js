import React from "react";
import styles from "../../../styles/Dashboard.module.css";

function mainStart() {
	return (
		<div className={"card my-3 card-body card-blue text-center"}>
			<div className="">
				<div className={styles.imagevaslogo}>
					<img
						className={styles.imagevaslogo}
						src="https://www.lifology.com/wp-content/themes/lifology/assets/india-special-offer/img/logo.svg"
					/>
				</div>
				<img
					className={styles.imgMain}
					alt="student image"
					src="https://pngimg.com/uploads/student/student_PNG124.png"
				/>
				<h6 className="m-2">Help me to Decide</h6>
				<p className={styles.font9}>
					Unable to find a solution?we are here for you
				</p>
				<button type="button" className="btn btn-warning m-4 rounded-pill">
					Get Started
				</button>
			</div>
		</div>
	);
}

export default mainStart;
