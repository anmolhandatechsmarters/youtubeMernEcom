import React from 'react';
import { Avatar, Box, Grid, Grid2, LinearProgress, Rating, Typography } from '@mui/material';

const ProductReview = () => {
  return (
    <Box sx={{ p: 2,}}>
      <Grid2 container spacing={2} alignItems="center">
        {/* Avatar Section */}
        <Grid2 item>
          <Avatar sx={{ width: 50, height: 50, bgcolor: "#9155fd", color: "white" }}>
            R
          </Avatar>
        </Grid2>

        {/* Name and Date in Column */}
        <Grid2 item xs>
          <Box display="flex" flexDirection="column">
            <Typography variant="subtitle1" fontWeight="bold">
              Raam
            </Typography>
            <Typography variant="caption" color="textSecondary">
              April 5, 2023
            </Typography>
          </Box>
        </Grid2>
      </Grid2>

      {/* Rating Component */}
      <Box mt={1}>
        <Rating value={4.5} precision={0.5} readOnly />
      </Box>

      {/* Review Text */}
      <Typography variant="body2" mt={1} className='w-full'>
       
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio quo repellat, dolorum impedit dolorem libero asperiores nesciunt qui architecto consequuntur earum iure sit deleniti amet at. Suscipit, explicabo exercitationem."
      </Typography>





    </Box>
  );
};

export default ProductReview;
