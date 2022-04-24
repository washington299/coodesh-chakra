import { extendTheme } from "@chakra-ui/react";

import { global } from "styles/global";
import { colors } from "styles/colors";
import { Container } from "styles/container";
import { Link } from "styles/link";

export const theme = extendTheme({
	colors,
	styles: {
		global,
	},
	components: {
		Container,
		Link,
	},
});
