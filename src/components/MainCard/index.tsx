import Image from "next/image";
import { GridItem, VStack, Heading, Text, Center } from "@chakra-ui/react";

type MainCardProps = {
	iconPath: string;
	alt: string;
	name: string;
	isAvailable: boolean;
};

export const MainCard = ({ iconPath, alt, name, isAvailable }: MainCardProps) => {
	return (
		<GridItem key={name} colSpan={1} display="flex" p={8} boxShadow="base" cursor="pointer">
			<Center p={4} bgColor="ice.100" borderRadius="50%">
				<Image src={iconPath} alt={alt} width={60} height={60} />
			</Center>

			<VStack alignItems="flex-start" justifyContent="center" ml={5}>
				<Heading fontSize={25}>{name}</Heading>
				{isAvailable && (
					<Text fontWeight={300} color="gray.400">
						Disponível
					</Text>
				)}
			</VStack>
		</GridItem>
	);
};
