import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.lightBlue[600]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue["A400"],
    light: colors.blue["A400"]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
    dark: white,
    light: black,
    caption: {
      dark: colors.grey[600],
      light: colors.grey[700],
    },
    error: {
      dark: white,
      light: black,
    }
  },
  progress: {
    colorprimary: {
      dark: colors.grey["A400"],
      light: colors.grey[400]
    },
    bar: {
      dark: colors.green[700],
      light: colors.green["A700"]
    }
  },
  h1: {
    dark: white,
    light: black,
  },
  background: {
    default: "#F4F6F8",
    paper: white,
    dark: "#212223",
    light: white
  },
  paper: {
    dark: "#171819",
    light: white
  },
  input: {
    dark: colors.grey[600],
    light: colors.grey[800]
  },
  border: {
    dark: black,
    light: black
  },
  inputColor: {
    dark: colors.grey[100],
    light: colors.grey[800]
  },
  icon: {
    color: {
      dark: white,
      light: colors.grey[800],
    },
    bgc: {
      dark: colors.lightBlue[600],
      light: colors.lightBlue[100]
    },
    common: {
      bgc: {
        dark: colors.grey["A400"],
        light: colors.grey[400]
      },
      color: {
        dark: colors.grey[600],
        light: colors.grey[200]
      }
    },
    nav: {
      color: {
        dark: white,
        light: colors.grey[900],
      },
      bgc: {
        dark: colors.lightBlue[600],
        light: colors.lightBlue[100]
      },
      active: {
        color: {
          dark: white,
          light: white
        },
        bgc: {
          dark: colors.lightBlue[900],
          light: colors.lightBlue["A700"]
        },
      }
    },
  },
  cDivider: {
    dark: colors.grey[800],
    light: colors.grey[400]
  },
  modal: {
    dark: "#000000bf",
    light: "#ffffffc2"
  },
  button: {
    delete: {
      bgc: {
        dark: colors.red["A400"],
        light: colors.red[900]
      },
      color: {
        dark: white,
        light: white
      }
    },
    navMenu: {
      bgc: {
        dark: "#171819",
        light: black
      },
      color: {
        dark: white,
        light: white
      }
    },
    close: {
      bgc: {
        dark: colors.grey[800],
        light: "transparent"
      },
      color: {
        dark: white,
        light: colors.grey[800],
      }
    }
  },
  theme: {
    bgc: {
      dark: colors.lightBlue[600],
      light: colors.indigo[900]
    },
    color: {
      dark: colors.yellow[600],
      light: colors.grey[400]
    }
  },
  disable: {
    bgc: {
      dark: colors.grey["A700"],
      light: colors.grey[300]
    },
    color: {
      dark: colors.grey["A400"],
      light: colors.grey[400],
    }
  },
  loading: {
    bgc: {
      dark: colors.grey[50],
      light: colors.grey[900]
    },
    color: {
      dark: colors.grey[50],
      light: colors.grey[900]
    }
  }
};
