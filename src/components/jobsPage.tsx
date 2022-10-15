import React from 'react'
import { useState } from "react";
import { ThemeProvider, createTheme,styled } from "@mui/material/styles";
import { 
    Typography,
    Card,CardActions,
    CardContent,CardMedia,
    CssBaseline,Grid,
    Container,
    Button,    
} from "@mui/material";
let cards: Array<number>
cards=[1,2,3,4,5,6,7,8,9];
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
  
const JobsPage=()=>
{
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
return(
<>
<ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>

<CssBaseline/>
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
              <Button size="small" color ="secondary">Apply</Button>
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
export default JobsPage;