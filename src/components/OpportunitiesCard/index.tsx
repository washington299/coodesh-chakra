import { Avatar, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

type OpportunitiesCardProps = {
	imgSrc: string;
	company: string;
	jobsQuantity: number;
};

export const OpportunitiesCard = ({ imgSrc, company, jobsQuantity }: OpportunitiesCardProps) => {
	return (
		<GridItem display="flex" alignItems="center" p={4} boxShadow="base">
			<Avatar
				src={imgSrc}
				name={company}
				w={{ base: "45px", md: "60px" }}
				h={{ base: "45px", md: "60px" }}
				mr={5}
			/>

			<VStack alignItems="flex-start">
				<Heading fontSize={16} fontWeight={400}>
					{company}
				</Heading>
				<Text color="main.100" fontSize={12}>
					{jobsQuantity.toString().padStart(2, "0")} vagas
				</Text>
			</VStack>
		</GridItem>
	);
};
