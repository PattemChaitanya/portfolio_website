import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // breakpoints: {
  //   keys: ["xs", "sm", "md", "lg", "xl"],
  //   values: {},
  // },
  // transitions: {
  //   easing: {
  //     easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  //     easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  //     easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  //     sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  //   },
  //   duration: {
  //     standard: 300,
  //     short: 250,
  //     enteringScreen: 225,
  //     shorter: 200,
  //     leavingScreen: 195,
  //     shortest: 150,
  //     complex: 375,
  //   },
  // },
  // transitions: {
  //   easing: {
  //     easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  //     easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  //     easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  //     sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  //   },
  //   duration: {
  //     standard: 300,
  //     short: 250,
  //     enteringScreen: 225,
  //     shorter: 200,
  //     leavingScreen: 195,
  //     shortest: 150,
  //     complex: 375,
  //   },
  // },
  palette: {
    mode: "light",
    primary: {
      main: "#EF4329",
      light: "#f26853",
      dark: "#a72e1c",
      background: "#f26853",
    },
    secondary: {
      main: "#292929",
      light: "#535353",
      dark: "#1c1c1c",
      background: "#fff",
    },
    blue: {
      main: "#4C83FC",
      hover: "#6D9BFF",
      background: "#F3F7FF",
    },
    info: {
      main: "#ffffff",
    },
    success: {
      main: "#34C759",
      light: "#83b25c",
      dark: "#466f24",
      hover: "#5DD57B",
      background: "#DFF7E5",
    },
    grey: {
      main: "#8F8F8F",
      light: "#a5a5a5",
      dark: "#646464",
      background: "",
    },
    warning: {
      main: "#FFC148",
      light: "#ecab33",
      dark: "#a26900",
      hover: "#FFCF72",
      background: "#FDF0D9",
    },
    error: {
      main: "#B80000",
      hover: "#EF4D43",
      background: "#FFE1E4",
    },
    Background: {
      white: "#fff",
      seaShell: "#F8F5F2",
    },
    white: {
      main: "#f1f1f1",
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Poppins"],
    // using typography fonts when design team gives.
    h1: {
      fontFamily: "Poppins",
      fontSize: "3rem",
      fontWeight: 900,
      color: "#292929",
    },
    h2: {
      fontFamily: "Poppins",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#292929",
    },
    h3: {
      fontFamily: "Poppins",
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#292929",
    },
    h4: {
      fontFamily: "Poppins",
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#292929",
    },
    h5: {
      fontFamily: "Poppins",
      fontSize: "0.75rem",
      fontWeight: 700,
      color: "#292929",
    },
    h6: {
      fontFamily: "Poppins",
      fontSize: "0.625rem",
      fontWeight: 700,
      color: "#292929",
    },
    title1: {
      fontFamily: "Poppins",
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#292929",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#292929",
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: "0.75rem",
      fontWeight: 400,
      color: "#292929",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "1.125rem",
      fontWeight: 400,
      color: "#292929",
    },
    body2: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 400,
      color: "#292929 #ef4329",
    },
    body3: {
      fontFamily: "Poppins",
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#292929 #ef4329",
    },
    body4: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 500,
      color: "#292929 #ef4329",
      textTransform: "capitalize",
    },
    body5: {
      fontFamily: "Poppins",
      fontSize: "1.125rem",
      fontWeight: 500,
      color: "#FFFFFF",
    },
    button1: {
      fontFamily: "Poppins",
      fontSize: "1.125rem",
      fontWeight: 600,
      color: "#292929",
    },
    button2: {
      fontFamily: "Poppins",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "#292929",
    },
    button3: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 500,
      color: "#292929",
      textTransform: "capitalize",
    },
    subHeading1: {
      fontFamily: "Poppins",
      fontSize: "1.125rem",
      fontWeight: 700,
      color: "#292929",
    },
    subHeading2: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 600,
      color: "#292929",
    },
    subHeading4: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 600,
      // color: "#292929",
    },
    subHeading3: {
      fontFamily: "Poppins",
      fontSize: "0.875rem",
      fontWeight: 700,
      color: "#292929",
    },
    caption: {
      fontFamily: "Poppins",
      fontSize: "0.75rem",
      fontWeight: 400,
      color: "#292929",
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: "none",
  //         borderRadius: 8,
  //       },
  //       textInherit: {
  //         backgroundColor: darkMode ? dark.A100 : "#F2F2F4",
  //       },
  //       textError: {
  //         backgroundColor: darkMode ? dark.A100 : undefined,
  //       },
  //       sizeLarge: {
  //         padding: "12px 20px",
  //       },
  //     },
  //   },
  //   MuiTypography: {
  //     styleOverrides: {
  //       root: {
  //         lineHeight: "1.4",
  //       },
  //       h4: {
  //         lineHeight: 1.2,
  //       },
  //       h5: {
  //         lineHeight: 1.2,
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8,
  //       },
  //     },
  //   },
  // },
  // overrides: {
  //   MuiSvgIcon: {
  //     root: {
  //       marginRight: "5px",
  //     },
  //   },
  // },
});

export default theme;
