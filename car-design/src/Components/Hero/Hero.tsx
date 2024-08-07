// import car from '../../assets/img/car.png'
import background from "../../assets/img/background.png";
// import logo from "../../assets/img/logomoto.png";
// import Cards from "../Cards/Cards";

const Hero = () => {
	return (
		<>
			<div
				className="bg-cover bg-center bg-no-repeat w-screen "
				style={{backgroundImage: `url(${background})`}}
			>
				<h1>WELCOME</h1>
			</div>
		</>
	);
};

export default Hero;
