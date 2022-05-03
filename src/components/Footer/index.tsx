import Image from "next/image";
import {
	Container,
	Box,
	Flex,
	VStack,
	HStack,
	Text,
	Center,
	Link,
	SimpleGrid,
	GridItem,
	Heading,
	Spacer,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { mock } from "./mock";

export const Footer = () => {
	return (
		<Box py={16} borderTop="1px solid lightGray">
			<Container>
				<Flex direction={{ base: "column-reverse", md: "row" }}>
					<VStack alignItems="flex-start">
						<Image
							src="/assets/svg/logo.svg"
							alt="Blue circle with white color inside and a black text written Coodesh"
							width={170}
							height={50}
						/>
						<Text color="gray.400">© Coodesh 2020. Todos os direitos reservados.</Text>
						<HStack>
							<Link href="https://github.com/washington299" isExternal>
								<Center p={3} borderRadius="50%" bg="gray.100">
									<FaGithub size={18} />
								</Center>
							</Link>
							<Link href="https://www.linkedin.com/in/washington-campos-741771162" isExternal>
								<Center p={3} borderRadius="50%" bg="gray.100">
									<FaLinkedin size={18} />
								</Center>
							</Link>
						</HStack>
					</VStack>

					<Spacer />

					<SimpleGrid columns={{ base: 2, lg: 3, xl: 4 }} rowGap={8} mb={[10, 10, 0]}>
						{mock.map(({ title, links }, index) => (
							<GridItem key={index} colSpan={1}>
								<VStack alignItems="flex-start">
									<Heading fontSize={16}>{title}</Heading>
									{links.map(({ text, href }, index) => (
										<Link key={index} color="gray.400" fontSize={14} href={href}>
											{text}
										</Link>
									))}
								</VStack>
							</GridItem>
						))}
					</SimpleGrid>
				</Flex>
			</Container>
		</Box>
	);
};
