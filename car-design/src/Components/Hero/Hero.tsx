// import car from '../../assets/img/car.png'
import background from "../../assets/img/background.png";
import Hero2 from "../Hero2/Hero2";
import Nav from "../Nav/Nav";
// import logo from "../../assets/img/logomoto.png";
// import Cards from "../Cards/Cards";

const Hero = () => {
	return (
		<>
		<div className="flex item-center justify-center w-screen ">
				
			<div
				className="bg-cover bg-center bg-no-repeat w-[800px] rounded-xl flex flex-col"
				style={{backgroundImage: `url(${background})`}}
				>
				<Nav/>
				<Hero2/>
				
			</div>
		</div>
		</>
	);
};

export default Hero;
