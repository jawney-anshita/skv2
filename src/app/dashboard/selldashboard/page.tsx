import { red } from "@mui/material/colors";
import Buy from "../../../../components/web/Buy";
import { Typography } from "@mui/material";
import Sell from "../../../../components/web/Sell";

export default function SellDashboard(){
    return(
        <div style={{marginLeft: 20, height: 'auto', marginTop: 20}}>
           
            <Typography variant="h4" component="h1" my={2}>
                List Properties for Sell
            </Typography>
            {/* <Buy></Buy> */}
            <Sell></Sell>
        </div>
    )
}