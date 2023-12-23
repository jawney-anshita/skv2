
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PropertyCard from '../common/PropertyCard';
import ClientName from '../common/ClientName';
import Phone from '../common/Phone';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import PropertyType from '../common/PropertyType';
import Category from '../common/Category';
import Dimensions from '../common/Dimensions';
import Age from '../common/Age';
import Availability from '../common/Availability';
import Furnishing from '../common/Furnishing';
import FileUpload from '../common/FileUpload';
import Parking from '../common/Parking';
import Rooms from '../common/Rooms';
import Email from '../common/Email';
import Location from '../common/Location';
import Address from '../common/Address';
import Price from '../common/Price';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Sell(){
    const clientname = "First Client";
    const phone = "";
    const email = "";
    const location = "";
    const address = "";
    const propertyType = "Residential";
    const category = "";
    const dimensions = "";
    const dunit = "";
    const age = "";
    const price = "";
    const punit = "crore"
    const furnishing = "";
    const availability = "";
    const bedrooms = "3";
    const washrooms = "2";
    const balconies = "1";
    const openParking = "";
    const closedParking = "";
    const imageurl ="";



    return(
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
            <ClientName client={clientname}></ClientName>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Phone phone={phone}></Phone>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Email email={email}></Email>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Price price={price} punit={punit}></Price>
        </Grid>
        
        <Grid item xs={12} md={12} lg={12}>
            <Divider>
                <Chip label="CHIP" />
            </Divider>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Location location={location}></Location>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Address address={address}></Address>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
           <PropertyType  propertyType={ propertyType }></PropertyType>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Category category={category}></Category>
        </Grid>
       
      
        <Grid item xs={12} md={12} lg={12}>
            <Divider>
                <Chip label="CHIP" />
            </Divider>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Dimensions dimensions={dimensions} dunit={dunit}></Dimensions>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Age age={age}></Age>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Availability availability={availability}></Availability>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Furnishing furnishing={furnishing}></Furnishing> 
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <FileUpload></FileUpload>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
            <Divider>
                <Chip label="Room Details" />
            </Divider>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
            <Rooms bedrooms={bedrooms} washrooms={washrooms} balconies={balconies}></Rooms>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
            <Divider>
                <Chip label="Parking Details" />
            </Divider>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
            <Parking openParking={openParking} closedParking={closedParking}></Parking>
        </Grid>
      </Grid>
    </Box>
          
        </div>
    )
}
