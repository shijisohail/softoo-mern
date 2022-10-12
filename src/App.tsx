import React from "react";
import { useState } from "react";
import WorkIcon from '@mui/icons-material/Work';
import { ThemeProvider, createTheme,styled } from "@mui/material/styles";
import { 
    Typography,
    AppBar,
    Card,CardActions,
    CardContent,CardMedia,
    CssBaseline,Grid,
    Toolbar,Container,
    Button,
    FormControlLabel,
    FormGroup,
    Switch
} from "@mui/material";

const cards=[1,2,3,4,5,6,7,8,9]
const light = createTheme({
    palette: {
      background: {
        default: "#e3f2fd"
      }
    }
  });
  
  const dark = createTheme({
    palette: {
      
      background: {
        default: "#141d2b"
      },
      text: {
        primary: "#ffffff",
        secondary:"#a4b1cd",
      }
      
    }
  });
  
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  
const App = () =>{
  // const classes = useStyles();

    // const [light, setLight] = React.useState(true);
    // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
    return(
        <>
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>

        <CssBaseline/>
        <AppBar position="relative" sx={{ bgcolor: "#111927" }}>
        <Toolbar >
            <WorkIcon  sx={{ color: "#9fef00" , marginRight: "30px"}}/>
            <Typography variant="h6" sx={{marginRight: "900px"}}>Job Postings</Typography>
            {
                <FormGroup>
                  <FormControlLabel
                    control={
                      <MaterialUISwitch  checked={isDarkTheme} onChange={changeTheme} sx={{ alignItems:"right",m:1}} defaultChecked />
                    }
                    label="Dark Theme"
                  />
                </FormGroup>
              }
        </Toolbar>
        </AppBar>
        <main>
            <div >
                <Container maxWidth = "sm" sx={{marginTop:'100px'}}>
                    <Typography variant="h2"align="center" color="textPrimary" sx={{fontWeight: 'bold'}} gutterBottom >
                    Job Posting
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem 
                    excepturi delectus quod, incidunt dolorum sunt placeat dolores impedit 
                    sit fugit debitis voluptate minus ex eveniet neque nemo magnam. Odio, 
                    delectus!
                    </Typography>
                    <div>
                      <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                          <Button variant ="contained" sx={{ bgcolor: "#9fef00" }}>
                            See Jobs
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant ="contained" sx={{ bgcolor: "#9fef00" }}>
                            See Applied Jobs
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth="md" sx={{padding:"20px 0"}}>
              <Grid container spacing={4}>
                {cards.map((card)=>(
                  <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card sx={{bgcolor: "#1a2332" , marginTop:'50px',display:"flex",flexDirection:"column",borderRadius:"10px" ,':hover': {  boxShadow: 20,},}}>
                    <CardMedia image="https://source.unsplash.com/random"
                    title="ImageTitle"
                    sx={{paddingTop:"56.25%"}}
                    />
                    <CardContent sx={{flexGrow:1}}>
                      <Typography gutterBottom variant="h5">
                      Job Title
                      </Typography>
                      <Typography variant="h6" align="center" color="textSecondary">
                        Job Description for Finders
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color ="primary">View</Button>
                      <Button size="small" color ="secondary">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
                )) }                
              </Grid>
            </Container>
        </main>
        <Container sx={{borderTop: 1  }}>
        <footer>
          <Typography variant="h6" color ="textSecondary" align="center" gutterBottom >
         Softoo Bootcamp Organized by P@SHA & PSEB via TECHLIFT
          </Typography>
          <Typography variant="caption" color ="textSecondary" sx={{display:"flex"}} align="center" marginLeft={"500px"} gutterBottom>
          ©All Rights Reserved to Sharjeel
          </Typography>
        </footer>
        </Container>
        </ThemeProvider>
        </>
    );
}
export default App;