import { Container, Heading, SimpleGrid, HStack, Button } from "@chakra-ui/react";

import { OpportunitiesCard } from "components/OpportunitiesCard";

import { mock } from "./mock";

export const Opportunities = () => {
	return (
		<Container mb={8}>
			<Heading fontSize={20} fontWeight={500} mb={2}>
				Oportunidades para você
			</Heading>

			<SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
				{mock.map(({ imgSrc, company, jobsQuantity }, index) => (
					<OpportunitiesCard
						key={index}
						imgSrc={imgSrc}
						company={company}
						jobsQuantity={jobsQuantity}
					/>
				))}
			</SimpleGrid>

			<HStack justifyContent={{ base: "center", md: "flex-end" }} mt={4}>
				<Button variant="primary" py={6} fontSize={14}>
					Ver mais empresas
				</Button>
			</HStack>
		</Container>
	);
};
