import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        bg: {
          value: {
            _light: { value: "#ffffff" },
            _dark: { value: "#0f172a" },
          },
        },
        brand: {
          50: { value: "#e3f2ff" },
          100: { value: "#b3d9ff" },
          500: { value: "#3182ce" },
          600: { value: "#2c5282" },
        },
      },
      fonts: {
        body: { value: "Inter, system-ui, sans-serif" },
        heading: { value: "Inter, system-ui, sans-serif" },
      },
    },
  },
});
