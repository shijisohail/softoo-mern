import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { 
    Typography,
    AppBar,
    Card,CardActions,
    CardContent,CardMedia
    ,CssBaseline,Grid,
    Toolbar,Container,
    Button
} from "@mui/material";
const themeLight = createTheme({
    palette: {
      background: {
        default: "#e3f2fd"
      }
    }
  });
  
  const themeDark = createTheme({
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
  
const App = () =>{
    const [light, setLight] = React.useState(true);
    return(
        <>
        <ThemeProvider theme={light ? themeLight : themeDark}>

        <CssBaseline/>
        <AppBar position="relative" sx={{ bgcolor: "#111927" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <WorkIcon  sx={{ color: "#9fef00" }}/>
            <Typography variant="h6">Job Postings</Typography>
            <Button variant = "outlined" sx={{ bgcolor: "#9fef00" }} onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>

        </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth = "sm">
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
                          <Button variant ="outlined" sx={{ bgcolor: "#9fef00" }}>
                            See Applied Jobs
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                </Container>
            </div>
        </main>
        </ThemeProvider>

        </>
    );
}
export default App;