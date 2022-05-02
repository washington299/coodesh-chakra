import { Heading, GridItem, Avatar, Link, Divider, Text, HStack, VStack } from "@chakra-ui/react";

type RecommendedJobsCardProps = {
	imgSrc: string;
	title: string;
	company: string;
	remote: boolean;
};

export const RecommendedJobsCard = ({
	imgSrc,
	title,
	company,
	remote,
}: RecommendedJobsCardProps) => {
	return (
		<GridItem colSpan={1} p={6} boxShadow="base" display="flex" cursor="pointer">
			<Avatar
				src={imgSrc}
				name={company}
				w={{ base: "45px", md: "60px" }}
				h={{ base: "45px", md: "60px" }}
				mr={5}
			/>

			<VStack alignItems="flex-start">
				<Heading fontSize={{ base: 14, md: 16 }} fontWeight={400}>
					{title}
				</Heading>
				<HStack>
					<Link color="gray.400" fontSize={12} textDecoration="underline">
						{company}
					</Link>
					<Divider orientation="vertical" />
					<Text color="gray.400" fontSize={12}>
						{remote ? "100% Remota" : "Presencial (Não aceita Home-Office)"}
					</Text>
				</HStack>
			</VStack>
		</GridItem>
	);
};
