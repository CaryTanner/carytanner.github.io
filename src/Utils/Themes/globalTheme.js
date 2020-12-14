import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// 79D4FF 8%  is color of overlay triangle


let globalTheme = createMuiTheme({
  palette: {
    
    primary: {
      main: '#7a04dd', //bright purple
      
    
    },
    secondary: {
        main: '#E3C1FF', //light gray purple
        
    },
    background: {
        default: "#fff",
        paper: '#fff' 
      },
    warning: {
      main: '#ffb7a4' //peach
    }, 
    success: {
      main: '#737271' //darkgrey
    },
    info: {
      main: '#f2f1f0' //light grey
    }
    
                           
  },
  typography: {
    fontFamily: "Roboto, arial, sans-serif",
    
  } 
});

globalTheme = responsiveFontSizes(globalTheme);

export default globalTheme