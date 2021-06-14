import React from "react";
import styles from "../../../styles/classesCard.module.css";

const VideoCard = (props) => {
	return (
		<div>
			<div className={"p-2 card " + styles.baseCard}>
				<div className={"card-body "}>
					<img
						className={styles.image}
						src={props.imgSrc}
						alt="Image of Chetan Bhagat"
					/>
					<div className={styles.playButton}>
						<div
							className={
								"d-flex justify-content-center align-items-center " +
								styles.circle
							}
						>
							<i
								className={
									"fas fa-play text-white " + styles.icon
								}
							></i>
						</div>
					</div>
					<div className="mt-3">
						<span className={styles.author}>Author</span>
						<div className={"pb-0 " + styles.name}>{props.author}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
