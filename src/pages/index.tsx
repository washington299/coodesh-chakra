import { Header } from "components/Header";
import { NavBar } from "components/NavBar";
import { Banner } from "components/Banner";
import { MainCards } from "components/MainCards";

const Home = () => {
	return (
		<>
			<Header />
			<NavBar />
			<Banner />
			<MainCards />
		</>
	);
};

export default Home;
