import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    senju: {
      50: "#fdeacc",
      100: "#fdeacc",
      200: "#fbd599",
      300: "#f8c166",
      400: "#f6ac33",
      500: "#f49700",
      600: "#c37900",
      700: "#925b00",
      800: "#623c00",
      900: "#311e00",
    },
  },
  fonts: {
    heading: "__Tilt_Neon_0efe6f",
  },
  components: {
    Text: {
      variants: {
        senjuMode: {
          color: "#fff",
          bg: "senju.500",
          borderRadius: 8,
          p: 1,
          fontWeight: "700",
        },
      },
    },
  },
});
