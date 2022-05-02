import { Container, Heading, SimpleGrid, HStack, Button } from "@chakra-ui/react";

import { RecommendedJobsCard } from "components/RecommendedJobsCard";

import { mock } from "./mock";

export const RecommendedJobs = () => {
	return (
		<Container mb={8}>
			<Heading fontSize={20} fontWeight={500} mb={2}>
				Vagas recomendadas
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
				{mock.map(({ imgSrc, title, company, remote }, index) => (
					<RecommendedJobsCard
						key={index}
						imgSrc={imgSrc}
						title={title}
						company={company}
						remote={remote}
					/>
				))}
			</SimpleGrid>

			<HStack justifyContent={{ base: "center", md: "flex-end" }} mt={4}>
				<Button variant="primary" py={6} fontSize={14}>
					Ver todas as vagas
				</Button>
			</HStack>
		</Container>
	);
};
