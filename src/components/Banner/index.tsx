import NextLink from "next/link";
import { Badge, Container, Flex, Box, Heading, Button, Link } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Banner = () => {
	return (
		<Container>
			<Flex
				direction={{ base: "column", md: "row" }}
				alignItems={{ md: "center" }}
				my={10}
				px={{ base: 4, md: 10, lg: 16 }}
				py={{ base: 10 }}
				bg="main.100"
			>
				<Box>
					<Badge variant="warning" borderRadius="md">
						Pendente
					</Badge>
					<Heading color="white" fontWeight={600} mb={4}>
						Desafio Tech!
					</Heading>
					<Box as="p" color="white" mb={6}>
						Responda o Desafio Técnico relativo a vaga{" "}
						<NextLink href="/">
							<Link fontWeight={600} textDecoration="underline">
								Desenvolvedor Fullstack Angular
							</Link>
						</NextLink>{" "}
						e fique em dia com o processo seletivo!
					</Box>
				</Box>
				<Box display="flex" justifyContent="center">
					<Button
						variant="warning"
						rightIcon={<MdKeyboardArrowRight size={18} />}
						fontWeight={400}
						py={6}
						ml={{ md: 10 }}
					>
						Responder Desafio
					</Button>
				</Box>
			</Flex>
		</Container>
	);
};
