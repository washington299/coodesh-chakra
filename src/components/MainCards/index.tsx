import { Container, Flex, SimpleGrid } from "@chakra-ui/react";

import { MainCard } from "components/MainCard";

import { mock } from "./mock";

export const MainCards = () => {
	return (
		<Container>
			<Flex>
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
