import { Grid, Button, TextField, Card, CardContent } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';

const DeleveryAddress = () => {
  return (
    <div className="p-5">
      <Grid container spacing={4} justifyContent="center">
        {/* Address Selection Section */}
        <Grid item xs={12} lg={5}>
          <Card className="shadow-lg rounded-lg">
            <CardContent>
              <div className="p-5 py-7 border-b cursor-pointer">
                <AddressCard />
                <Button
                  sx={{ mt: 2, bgcolor: 'rgb(145 85 253)' }}
                  size="large"
                  variant="contained"
                  className="w-full"
                >
                  Deliver Here
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Address Form Section */}
        <Grid item xs={12} lg={7}>
          <Card className="shadow-lg rounded-lg">
            <CardContent>
              <form>
                <Grid container spacing={3}>
                  {/* First Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  {/* Last Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      autoComplete="family-name"
                    />
                  </Grid>

                  {/* Address */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address"
                      name="address"
                      label="Address"
                      fullWidth
                      autoComplete="street-address"
                      multiline
                      rows={4}
                    />
                  </Grid>

                  {/* City */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="address-level2"
                    />
                  </Grid>

                  {/* State */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="state"
                      name="state"
                      label="State"
                      fullWidth
                      autoComplete="address-level1"
                    />
                  </Grid>

                  {/* ZIP Code */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="ZIP Code"
                      fullWidth
                      autoComplete="postal-code"
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="phone"
                      name="phone"
                      label="Phone Number"
                      fullWidth
                      autoComplete="tel"
                    />
                  </Grid>
                </Grid>

                {/* Submit Button */}
                <Button
                  sx={{ mt: 3, bgcolor: 'rgb(145 85 253)' }}
                  size="large"
                  variant="contained"
                  className="w-full"
                  type="submit"
                >
                  Save Address
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleveryAddress;
