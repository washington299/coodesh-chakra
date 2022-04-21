import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export type MenuItemProps = {
	text: string;
	href: string;
	color?: string;
	hoverColor?: string;
};

export const MenuItem = ({
	text,
	href,
	color = "gray.400",
	hoverColor = "gray.500",
}: MenuItemProps) => {
	return (
		<NextLink href={href}>
			<Link color={color} fontWeight={500} px={6} _hover={{ color: hoverColor }}>
				{text}
			</Link>
		</NextLink>
	);
};
