// import car from '../../assets/img/car.png'
import background from "../../assets/img/background.png";
import logo from "../../assets/img/logomoto.png";
// import Cards from "../Cards/Cards";






const Hero = () => {	

	
	return (
		<>
			<div className="bg-white  relative  w-full flex flex-col items-center justify-center ">
				<img
					src={background}
					alt="background"
					className="  w-[1440px]-z-10 rounded-[38px]"
				/>
				<div className="absolute top-[2rem]">
					<img
						src={logo}
						alt="logo"
						className="w-[45px] relative left-[45%] mb-4"
					/>
					<ul className=" text-white flex gap-[4rem]">
						<li className="">Home</li>
						<li>Models</li>
						<li>Radian Motors</li>
						<li>About</li>
						<li>Reviews</li>
					</ul>

					<span className="text-white font-sans font-bold text-7xl mt-[4rem] flex">
						Drive with Purpose
					</span>
					<span className="text-white font-extralight font-sans text-7xl mt-[4rem] flex">
					Find Your Perfect Drive
					</span>
				</div>
				{/* <Cards/> */}
				
			</div>
		</>
	);
};

export default Hero;
