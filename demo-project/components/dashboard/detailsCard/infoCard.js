import styles from "../../../styles/detailsCard.module.css";

/**
 * Card to display the details of the
 */
const InfoCard = (props) => {
	let playButton, playIcon, cardBackground;
	if (props.color === "blue") {
		playButton = styles.playButtonBlue;
		cardBackground = styles.cardBackgroundBlue;
		playIcon = styles.playIconBlue;
	} else if (props.color === "green") {
		playButton = styles.playButtonGreen;
		cardBackground = styles.cardBackgroundGreen;
		playIcon = styles.playIconGreen;
	} else if (props.color === "orange") {
		playButton = styles.playButtonOrange;
		cardBackground = styles.cardBackgroundOrange;
		playIcon = styles.playIconOrange;
	}

	return (
		<div className={styles.infoCard}>
			<div className={"card p-4 " + cardBackground}>
				<div className="row">
					<div className="col-sm-4">
						<div
							className={
								"card d-flex justify-content-center align-items-center " +
								playButton
							}
						>
							<div
								className={
									"card d-flex justify-content-center align-items-center " +
									styles.circle
								}
							>
								<div className="">
									<i
										className={
											"fas fa-" +
											props.icon +
											" " +
											playIcon
										}
									></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-8 d-flex justify-content-center align-items-center">
						{props.description}
					</div>
				</div>
				<div className="row mt-2">
					<span>
						<strong className={styles.numberOfVideos}>
							{props.value}
						</strong>
						{props.entity}
					</span>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
