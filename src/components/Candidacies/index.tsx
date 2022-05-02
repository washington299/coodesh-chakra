import Image from "next/image";
import { Container, HStack, Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { CandidaciesCard } from "components/CandidaciesCard";

import { mock } from "./mock";

export const Candidacies = () => {
	return (
		<Container my={12}>
			<HStack alignItems="center" mb={2}>
				<Image
					src="/assets/svg/suitcase.svg"
					alt="Imagem de uma mala com traços azuis"
					width={30}
					height={30}
				/>
				<Heading fontSize={20} fontWeight={500}>
					Candidaturas em andamento
				</Heading>
				<Box>
					<img
						src="/assets/svg/polygon.svg"
						alt="Um triângulo preto de cabeça pra baixo"
						width={15}
						height={20}
					/>
				</Box>
			</HStack>

			<SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
				{mock.map(({ imgSrc, title, company, type }, index) => (
					<CandidaciesCard
						key={index}
						imgSrc={imgSrc}
						title={title}
						company={company}
						type={type}
					/>
				))}
			</SimpleGrid>
		</Container>
	);
};
