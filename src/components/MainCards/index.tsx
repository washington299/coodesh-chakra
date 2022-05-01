import { Container, Flex, SimpleGrid } from "@chakra-ui/react";

import { MainCard } from "components/MainCard";

import { mock } from "./mock";

export const MainCards = () => {
	return (
		<Container>
			<Flex>
				{/* <HStack alignItems="center">
					<Image
						src="/assets/svg/suitcase.svg"
						alt="Imagem de uma mala com traços azuis"
						width={30}
						height={30}
					/>
					<Heading fontSize={20} fontWeight={500}>
						Candituras em andamento
					</Heading>
					<Box>
						<img
							src="/assets/svg/polygon.svg"
							alt="Um triângulo preto de cabeça pra baixo"
							width={15}
							height={20}
						/>
					</Box>
				</HStack> */}

				<SimpleGrid w="full" columns={{ base: 1, md: 2, lg: 3 }} gap={7}>
					{mock.map(({ iconPath, alt, name, isAvailable }) => (
						<MainCard
							key={name}
							iconPath={iconPath}
							alt={alt}
							name={name}
							isAvailable={isAvailable}
						/>
					))}
				</SimpleGrid>
			</Flex>
		</Container>
	);
};
