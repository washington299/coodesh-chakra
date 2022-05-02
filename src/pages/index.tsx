import { Header } from "components/Header";
import { NavBar } from "components/NavBar";
import { Banner } from "components/Banner";
import { MainCards } from "components/MainCards";
import { Candidacies } from "components/Candidacies";

const Home = () => {
	return (
		<>
			<Header />
			<NavBar />
			<Banner />
			<MainCards />
			<Candidacies />
		</>
	);
};

export default Home;
