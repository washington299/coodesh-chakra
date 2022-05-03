import { Header } from "components/Header";
import { NavBar } from "components/NavBar";
import { Banner } from "components/Banner";
import { MainCards } from "components/MainCards";
import { Candidacies } from "components/Candidacies";
import { RecommendedJobs } from "components/RecommendedJobs";
import { Opportunities } from "components/Opportunities";
import { Faq } from "components/Faq";
import { Footer } from "components/Footer";

const Home = () => {
	return (
		<>
			<Header />
			<NavBar />
			<Banner />
			<MainCards />
			<Candidacies />
			<RecommendedJobs />
			<Opportunities />
			<Faq />
			<Footer />
		</>
	);
};

export default Home;
