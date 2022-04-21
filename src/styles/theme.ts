import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	components: {
		Container: {
			baseStyle: {
				maxWidth: "1150px",
			},
		},
	},
});
