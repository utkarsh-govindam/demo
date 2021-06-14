import styles from "../../../styles/classesCard.module.css";
import VideoCard from "./videoCard";

const ClassesCard = () => {
	return (
		<div>
			<div className={"card p-2 " + styles.outerCard}>
				<div className="card-body">
					<div className="row">
						<div className="class-title">
							<h5 className="fw-bold p-1">
								Watch Lifology Master Class
							</h5>
						</div>
						<div className="p-1 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
							<VideoCard
								author="Chetan Bhagat"
								imgSrc="/authors/ChetanBhagatImage.jpg"
							/>
						</div>
						<div className="p-1 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
							<VideoCard
								author="Ashwin Sanghi"
								imgSrc="/authors/AshwinSanghiImagejpg.jpg"
							/>
						</div>
						<div className="p-1 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
							<VideoCard
								author="Anand NeelaKantan"
								imgSrc="/authors/AnandNeelakantanImage.jpg"
							/>
						</div>
						<div className="p-1 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
							<VideoCard
								author="Shashi Tharoor"
								imgSrc="/authors/ShashiTharoorImage.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClassesCard;
