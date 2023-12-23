import { red } from "@mui/material/colors";
// import Buy from "../../../../components/web/Buy";
import { Typography } from "@mui/material";
import Buy from "../../../../components/web/Buy";


export default function BuyDashboard(){
    return(
        <div style={{marginLeft: 20, height: 500, marginTop: 20}}>
           
            <Typography variant="h4" component="h1" my={2}>
                View Properties for Sell
            </Typography>
            <Buy></Buy>
           
        </div>
    )
}