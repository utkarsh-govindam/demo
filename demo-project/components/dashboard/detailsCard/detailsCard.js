import InfoCard from "./infoCard";
import styles from '../../../styles/detailsCard.module.css'

const DetailsCard = () => {
	return (
		<div>
			<div className={"card " + styles.outerCard}>
				<div className="col-sm-12">
					<div className="row p-4">
						<div className="col-4">
							<InfoCard
								color="blue"
								value={125}
								entity="Videos"
								description="Total watched Videos"
								icon="play"
							/>
						</div>
						<div className="col-4">
							<InfoCard
								color="green"
								value={5}
								entity="Assessment"
								description="Total Assessment"
								icon="graduation-cap"
							/>
						</div>
						<div className="col-4">
							<InfoCard
								color="orange"
								value={25}
								entity="Articles"
								description="Total Articles Read"
								icon="book-open"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsCard;
