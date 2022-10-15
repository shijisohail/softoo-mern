import React from "react";
import { AppBar,Toolbar,Typography } from "@mui/material"; 
import WorkIcon from '@mui/icons-material/Work';
const Navbar=()=>{
    return(
        <AppBar position="relative" sx={{ bgcolor: "#111927" }}>
        <Toolbar >
            <WorkIcon  sx={{ color: "#9fef00" , marginRight: "30px"}}/>
            <Typography variant="h6" sx={{marginRight: "900px"}}>Job Postings</Typography>
            {
                // <FormGroup>
                //   <FormControlLabel
                //     control={
                //       <MaterialUISwitch  checked={isDarkTheme} onChange={changeTheme} sx={{ alignItems:"right",m:1}} defaultChecked />
                //     }
                //     label="Dark Theme"
                //   />
                // </FormGroup>
              }
        </Toolbar>
        </AppBar>
    );
}
export default Navbar;