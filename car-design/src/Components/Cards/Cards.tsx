import carIcon from "../../assets/img/carIcon.png";
import styles from "./Cards.module.css";

const Cards = () => {
	return (
		<>
			<div className="bg-blue-950 w-screen h-screen text-white flex flex-col font-sans items-center  ">
				<div>
					<div className="flex">
						<img src={carIcon} className="w-[100px]" alt="" />
						{/* <img src="/assets/img/carIcon" alt="" /> */}
						<span className="text-7xl">Go Green</span>
						<img src={carIcon} className={styles.flipped} alt="" />
					</div>
					<span className=" font-700 text-5xl">
						Radian’s EV Technology
					</span>
				</div>
				<div className="flex gap-5">
					<div
						className="w-[422px] bg-[#FFFFFF] text-blue-900 text-2xl p-[38px] text-center flex flex-col rounded-xl"
					>
                        <span className="font-bold">Long-Lasting Battery Life </span><br />
                        <span>Go further on a single charge with our cutting-edge battery technology, giving you the freedom to explore without frequent stops.</span>
                    </div>
                    <div
						className="w-[422px] bg-[#FFFFFF] text-blue-900 text-2xl p-[38px] text-center flex flex-col rounded-xl"
					>
                        <span className="font-bold">Long-Lasting Battery Life </span><br />
                        <span>Go further on a single charge with our cutting-edge battery technology, giving you the freedom to explore without frequent stops.</span>
                    </div>
                    <div
						className="w-[422px] bg-[#FFFFFF] text-blue-900 text-2xl p-[38px] text-center flex flex-col rounded-xl"
					>
                        <span className="font-bold">Long-Lasting Battery Life </span><br />
                        <span>Go further on a single charge with our cutting-edge battery technology, giving you the freedom to explore without frequent stops.</span>
                    </div>
				</div>
			</div>
		</>
	);
};

export default Cards;
