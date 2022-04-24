import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Flex, Button, Spacer, Link } from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";

import { mock } from "./mock";

export const NavBar = () => {
	const { pathname } = useRouter();

	return (
		<Box bg="main.100">
			<Container>
				<Flex direction={{ base: "column", lg: "row" }} alignItems={{ lg: "center" }}>
					<Box as="nav" whiteSpace="nowrap" py={6} overflowX="auto">
						{mock.navbarList.map(({ text, href }) => {
							const isActive = pathname === href;

							return (
								<NextLink key={text} href={href}>
									{isActive ? (
										<Link color="white" px={6}>
											{text}
										</Link>
									) : (
										<Link variant="secondary" px={6}>
											{text}
										</Link>
									)}
								</NextLink>
							);
						})}
					</Box>
					<Spacer />
					<Button
						leftIcon={<MdPerson size={18} />}
						w={{ base: "100%", lg: "auto" }}
						my={{ base: 2, lg: 0 }}
						fontWeight={500}
						fontSize={14}
					>
						Completar perfil
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};
