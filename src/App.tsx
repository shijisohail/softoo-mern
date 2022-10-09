import { Typography } from "@mui/material";
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import React from "react";
const App = () =>{
    return(
        <div>
            <Typography variant="h1">Hi There</Typography>
            <Button variant="contained" color = "error">Fuck you!</Button>
            <LoadingButton loading variant="contained"> Submit</LoadingButton>
<LoadingButton loading loadingIndicator="Loading…" variant="contained"> Fetch data</LoadingButton>
<LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="contained">
     Save
</LoadingButton>
        </div>
    );
}
export default App;