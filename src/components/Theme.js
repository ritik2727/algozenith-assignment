import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Colors from '../colors/Colors'
const arcBlue = "#FFFFFF";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";



let theme = createTheme({
  palette: {
    common: {
      blue:Colors.blue,
      orange: arcOrange
    },
    primary: {
      main:  Colors.BWhite,
    },
    secondary: {
      main: Colors.Black
    }
  },
  typography:{
      tab:{
        fontFamily:'Raleway',
        textTransform:'none',
        fontWeight:700,
        fontSize:'1rem',
        color:'white'
      },
      estimate:{
        fontFamily:'Pacifico',
        fontSize:'1rem',
        textTransform:'none',
        color:'white'
      },
      h2:{
        fontFamily:'Raleway',
        fontWeight:700,
        fontSize:'2.5rem',
        color:Colors.white ,
        lineHeight:1.5
      },
      h3: {
        fontFamily:'sans-serif',
        fontSize: "2.5rem",
        color:Colors.white ,
        fontWeight:700,
        
      },
      h4:{
        fontFamily:'sans-serif',
        fontSize:'1.75rem',
        color:Colors.white ,
        fontWeight:700
      },
      h5:{
        fontFamily:'Raleway',
        fontSize:'1.55rem',
        color:Colors.white ,
        fontWeight:550
      },
      h6: {
        fontWeight: 500,
        fontFamily: "Raleway",
        color:Colors.white ,
        lineHeight:1
      },
      subtitle1:{
        fontSize:'0.9rem',
        fontWeight:300,
        color:arcGrey
      },
      subtitle2: {
        color: "white",
        fontWeight: 300,
        fontSize: "1.25rem"
      },
      body1: {
        fontSize: "1.25rem",
        color:Colors.SubBlack,
        fontWeight: 300
      },
      caption: {
        fontSize: "0.8rem",
        fontWeight: 300,
        color: arcGrey
      },
      learnButton: {
        borderColor: arcBlue,
        borderWidth: 2,
        textTransform: "none",
        color: arcBlue,
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold"
      }
  },
 components: {
    MuiInputLabel: {
      styleOverrides:{
        
      root: {
        color:Colors.blue,
        fontSize: "1rem"
      }
    }
    },
    MuiInput: {
      styleOverrides:{
      root: {
        color: Colors.blue,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${Colors.blue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${Colors.blue}`
        }
      }
    }
  }
  }
})
const Theme = responsiveFontSizes(theme);

export default Theme;
