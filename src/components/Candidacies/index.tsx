import Image from "next/image";
import { Container, HStack, Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { CandidaciesCard } from "components/CandidaciesCard";

const mock = [
	{
		imgSrc: "/assets/images/grupo_m_contigo.png",
		title: "Desenvolvedor(a) Fullstack Angular",
		company: "Grupo M Cantigo",
		type: "sorting",
	},
	{
		imgSrc: "/assets/images/nata_house.png",
		title: "Desenvolvedor(a) Front-end ReactJs",
		company: "Sólides",
		type: "challenge",
	},
];

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
