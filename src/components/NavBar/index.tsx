import { Box, Container, Flex, Button, Spacer, Show } from "@chakra-ui/react";

import { MenuItem } from "components/MenuItem";

export const NavBar = () => {
	return (
		<Box bg="main.100">
			<Container overflowX="auto">
				<Flex alignItems="center">
					<Box as="nav" whiteSpace="nowrap" py={8}>
						<MenuItem text="Dashboard" href="/" color="white" hoverColor="whiteAlpha.800" />
						<MenuItem text="Candidaturas" href="/" color="white" hoverColor="whiteAlpha.800" />
						<MenuItem text="Desafio Tech" href="/" color="white" hoverColor="whiteAlpha.800" />
						<MenuItem text="Meu Perfil" href="/" color="white" hoverColor="whiteAlpha.800" />
					</Box>
					<Spacer />
					<Show above="lg">
						<Button>Completar perfil</Button>
					</Show>
				</Flex>
			</Container>
		</Box>
	);
};
