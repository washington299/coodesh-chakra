import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export type MenuItemProps = {
	text: string;
	href: string;
};

export const MenuItem = ({ text, href }: MenuItemProps) => {
	return (
		<NextLink href={href}>
			<Link color="gray.400" fontWeight={500} px={6} _hover={{ color: "gray.500" }}>
				{text}
			</Link>
		</NextLink>
	);
};
