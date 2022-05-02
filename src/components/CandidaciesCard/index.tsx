import {
	HStack,
	Box,
	Heading,
	GridItem,
	Avatar,
	Button,
	Badge,
	Link,
	VStack,
} from "@chakra-ui/react";

type CandidaciesCardProps = {
	imgSrc: string;
	title: string;
	company: string;
	type: string;
};

export const CandidaciesCard = ({ imgSrc, title, company, type }: CandidaciesCardProps) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const colorsByType: any = {
		sorting: "warning",
		challenge: "light_green",
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const buttonTextByType: any = {
		sorting: "Agendar Call Fit",
		challenge: "Agender Call Tech",
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const badgeTextByType: any = {
		sorting: "Triagem",
		challenge: "Desafio",
	};

	return (
		<GridItem
			display="flex"
			flexDirection={{ base: "column", md: "row" }}
			justifyContent="space-between"
			boxShadow="base"
			p={5}
		>
			<HStack mr={4}>
				<Avatar src={imgSrc}></Avatar>
				<Box>
					<Badge variant={`${colorsByType[type]}_solid`}>{badgeTextByType[type]}</Badge>
					<Heading fontSize={16} fontWeight={400}>
						{title}
					</Heading>
					<Link color="gray.400" fontSize={14} textDecoration="underline">
						{company}
					</Link>
				</Box>
			</HStack>
			<VStack mt={{ base: 4, md: 0 }} justifyContent="center">
				<Button variant={`${colorsByType[type]}_outline`}>{buttonTextByType[type]}</Button>
			</VStack>
		</GridItem>
	);
};
