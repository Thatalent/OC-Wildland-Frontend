import contactIcon from "../../public/contact-icon.png"
import locationIcon from "../../public/location-icon.png"
import shippingIcon from "../../public/shipping-icon.png"
import paymentIcon from "../../public/payment-icon.png"
import paypalLogo from "../../public/paypal-logo.png"
import GPayLogo from "../../public/gpay-logo.png"
import sslLogo from "../../public/ssl-logo.png"
import { Box, Button, Typography, Container, InputLabel, Input, InputAdornment, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, FormLabel, Grid, Divider, } from "@mui/material"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { ClassNames } from "@emotion/react"
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import { useState } from "react"

export default function Checkout() {
  const states = [
    {value: 'AL', label: 'Alabama'},
    {value: 'AK', label: 'Alaska'},
    {value: 'AZ', label: 'Arizona'},
    {value: 'AR', label: 'Arkansas'},
    {value: 'CA', label: 'California'},
    {value: 'CO', label: 'Colorado'},
    {value: 'CT', label: 'Connecticut'},
    {value: 'DE', label: 'Delaware'},
    {value: 'FL', label: 'Florida'},
    {value: 'GA', label: 'Georgia'},
    {value: 'HI', label: 'Hawaii'},
    {value: 'ID', label: 'Idaho'},
    {value: 'IL', label: 'Illinois'},
    {value: 'IN', label: 'Indiana'},
    {value: 'IA', label: 'Iowa'},
    {value: 'KS', label: 'Kansas'},
    {value: 'KY', label: 'Kentucky'},
    {value: 'LA', label: 'Louisiana'},
    {value: 'ME', label: 'Maine'},
    {value: 'MD', label: 'Maryland'},
    {value: 'MA', label: 'Massachusetts'},
    {value: 'MI', label: 'Michigan'},
    {value: 'MN', label: 'Minnesota'},
    {value: 'MS', label: 'Mississippi'},
    {value: 'MO', label: 'Missouri'},
    {value: 'MT', label: 'Montana'},
    {value: 'NE', label: 'Nebraska'},
    {value: 'NV', label: 'Nevada'},
    {value: 'NH', label: 'New Hampshire'},
    {value: 'NJ', label: 'New Jersey'},
    {value: 'NM', label: 'New Mexico'},
    {value: 'NY', label: 'New York'},
    {value: 'NC', label: 'North Carolina'},
    {value: 'ND', label: 'North Dakota'},
    {value: 'OH', label: 'Ohio'},
    {value: 'OK', label: 'Oklahoma'},
    {value: 'OR', label: 'Oregon'},
    {value: 'PA', label: 'Pennsylvania'},
    {value: 'RI', label: 'Rhode Island'},
    {value: 'SC', label: 'South Carolina'},
    {value: 'SD', label: 'South Dakota'},
    {value: 'TN', label: 'Tennessee'},
    {value: 'TX', label: 'Texas'},
    {value: 'UT', label: 'Utah'},
    {value: 'VT', label: 'Vermont'},
    {value: 'VA', label: 'Virginia'},
    {value: 'WA', label: 'Washington'},
    {value: 'WV', label: 'West Virginia'},
    {value: 'WI', label: 'Wisconsin'},
    {value: 'WY', label: 'Wyoming'},
  ];
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('same-as-billing');
  return (
  <div>
    <Button sx={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginLeft: "16px",
      marginBottom: "32px",
      marginTop: "48px",
      padding: "0px"
    }}>
      <ArrowBackRoundedIcon sx={{color: "rgba(102, 128, 153, 1)"}} />
      <Typography sx={{
        fontWeight: 400,
        fontSize: "15.25px",
        color: "rgba(102, 128, 153, 1)"
      }}>Back To Cart</Typography>
    </Button>
    <Grid container spacing={0.5} >
      <Grid item lg={8}>
      {/* Checkout Block */}
      <Container>
        <Typography variant="h3" component="h3">
                Checkout
        </Typography>
          <Box sx={
            {
              border: "1px solid rgba(225, 231, 239, 1)",
              borderRadius: "8px",
              padding: "25px",
              marginBottom: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }
          }>
            <Typography variant="h4" component="h4" marginTop="16px">
              Express Checkout
              </Typography>

            <Container disableGutters sx={
              {
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                width: "100%",
                justifyContent: "center",
                gap: "16px",
              }
            }>
              <Button variant="contained" fullWidth
                sx={{
                backgroundColor:"rgba(31, 31, 31, 1)",
                '&:hover': {backgroundColor:"rgba(31, 31, 31, 1)"}
                }}
                ><img src={GPayLogo} alt="Google Pay Logo"/></Button>
              <Button variant="contained" fullWidth
                sx={{
                  backgroundColor:"rgba(31, 31, 31, 1)",
                  '&:hover': {backgroundColor:"rgba(31, 31, 31, 1)"}
                }}>
                  <Typography
                  sx={{
                    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif",
                    display:"flex",
                    alignItems:"start",
                    fontSize:"21px",
                    fontWeight: "510",
                    color: "rgba(255, 255, 255, 1)",
                    lineHeight: "30px",
                  }}>Pay with <AppleIcon fontSize="medium"/>Pay</Typography>
                  </Button>
              <Button variant="contained" fullWidth
                sx={{
                  backgroundColor:"rgba(255, 196, 58, 1)",
                  '&:hover': {backgroundColor:"rgba(255, 196, 58, 1)"}
                }}>
                  <Typography sx={{color:"rgba(37, 59, 128, 1)"}}> Buy with <img src={paypalLogo} alt="PayPal Logo"/>
                  </Typography>
                  </Button>
              </Container>
          </Box>
          <Container sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}>
            <Typography>OR</Typography>
          </Container>
          <Box
          sx={{
            padding: "24px",
            border: "1px solid rgba(225, 231, 239, 1)",
            borderRadius: "8px",
            marginBottom: "32px",
            }}>
              <Typography variant="h4" component="h2"
              sx={{display:"flex", alignItems:"start", gap:"8px",}}>
                  {/* <PersonOutlineOutlinedIcon /> */}
                  <img src={contactIcon} alt="Contact Icon" width="20px" height="20px"/>
                  Contact Information
                  </Typography>
              <Container disableGutters
              sx={{display:"flex", flexDirection:"column", gap:"16px", marginTop:"24px"}}>
                <Container disableGutters>
                  <InputLabel>Full Name *</InputLabel>
                  <Input
                  required={true}
                  fullWidth={true}
                  disableUnderline={true}
                  sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                  placeholder="Enter your full name"></Input>
                </Container>
                <Container disableGutters>
                  <InputLabel>Email Address *</InputLabel>
                  <Input
                  required
                  fullWidth={true}
                  disableUnderline={true}
                  sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                  placeholder="Enter your email address"
                  startAdornment={
                    <InputAdornment position="start">
                    <EmailOutlinedIcon />
                    </InputAdornment>
                  }></Input>
                </Container>
                <Container disableGutters>
                  <InputLabel>Phone Number</InputLabel>
                  <Input
                  required
                  fullWidth={true}
                  disableUnderline={true}
                  sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                  placeholder="Enter your phone number"
                  startAdornment={
                    <InputAdornment position="start">
                    <LocalPhoneOutlinedIcon />
                    </InputAdornment>
                  }></Input>
                </Container>
              </Container>
            </Box>
            <Box sx={{
            padding: "24px",
            border: "1px solid rgba(225, 231, 239, 1)",
            borderRadius: "8px",
            marginBottom: "32px",
            }}>
            <Typography variant="h4" component="h2"
              sx={{display:"flex", alignItems:"start", gap:"8px",}}>
                  {/* <FmdGoodOutlinedIcon /> */}
                  <img src={locationIcon} alt="Location Icon" width="20px" height="20px"/>
                  Billing Address
                  </Typography>
                  <Container
                  disableGutters
                  sx={{
                    paddingTop: "24px",
                  }}>
                    <Container
                    disableGutters>
                      <InputLabel>Street Address *</InputLabel>
                      <Input
                      required
                      fullWidth={true}
                      disableUnderline={true}
                      sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                      placeholder="Enter street address"></Input>
                    </Container>
                    <Container
                    disableGutters
                    sx={{
                      display: "flex",
                      gap: "16px",
                      paddingTop: "16px",
                    }}>
                      <Container
                      disableGutters
                      sx={{

                      }}>
                        <InputLabel>City *</InputLabel>
                        <Input
                        required
                        fullWidth={true}
                        disableUnderline={true}
                        sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                        placeholder="Enter city"></Input>
                      </Container>
                      <Container
                      disableGutters>
                        <InputLabel id="state-select-label">State</InputLabel>
                        <Select
                          required
                          labelId="state-select-label"
                          id="state-select"
                          fullWidth={true}
                          sx={{height:"40px"}}
                          displayEmpty
                          renderValue={(value: unknown) => {
                            if (!value) {
                              return <Typography>Select state</Typography>;
                            }
                            return <>{value}</>;
                          }}
                        >
                          {states.map((state) => (
                            <MenuItem key={state.value} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                          </Select>
                        </Container>
                        <Container
                        disableGutters>
                          <InputLabel>ZIP Code *</InputLabel>
                          <Input
                          required
                          fullWidth={true}
                          disableUnderline={true}
                          sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                          placeholder="Enter ZIP code"></Input>
                      </Container>
                    </Container>
                  </Container>
            </Box>
            <Box sx={{
            padding: "24px",
            border: "1px solid rgba(225, 231, 239, 1)",
            borderRadius: "8px",
            marginBottom: "32px",
            }}>
            <Typography variant="h4" component="h2"
              sx={{display:"flex", alignItems:"start", gap:"8px",}}>
                {/* <LocalShippingOutlinedIcon /> */}
                <img src={shippingIcon} alt="Shipping Icon" width="20px" height="20px"/>
                Shipping Information
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                      <Checkbox defaultChecked
                      onClick={() => {setSelectedShippingMethod(selectedShippingMethod === "same-as-billing" ? "" : "same-as-billing")}}
                      sx={{
                        color: "rgba(243, 78, 27, 1)",
                        '&.Mui-checked': {color: "rgba(243, 78, 27, 1)"}
                        }} />}
                      label="Same as billing address">
                    </FormControlLabel>
                  </FormGroup>
                  <Container
                  disableGutters
                  sx={{
                    paddingTop: "24px",
                    display: `${selectedShippingMethod === "same-as-billing" ? "none" : ""} `,
                  }}>
                    <Container
                    disableGutters>
                      <InputLabel>Street Address *</InputLabel>
                      <Input
                      required
                      fullWidth={true}
                      disableUnderline={true}
                      sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                      placeholder="Enter street address"></Input>
                    </Container>
                    <Container
                    disableGutters
                    sx={{
                      display: "flex",
                      gap: "16px",
                      paddingTop: "16px",
                    }}>
                      <Container
                      disableGutters
                      sx={{

                      }}>
                        <InputLabel>City *</InputLabel>
                        <Input
                        required
                        fullWidth={true}
                        disableUnderline={true}
                        sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                        placeholder="Enter city"></Input>
                      </Container>
                      <Container
                      disableGutters>
                        <InputLabel id="state-select-label">State</InputLabel>
                        <Select
                          required
                          labelId="state-select-label"
                          id="state-select"
                          label="State"
                          fullWidth={true}
                          sx={{height:"40px"}}
                          displayEmpty
                        >
                          {states.map((state) => (
                            <MenuItem key={state.value} value={state.value}>
                              {state.label}
                            </MenuItem>
                          ))}
                          </Select>
                        </Container>
                        <Container
                        disableGutters>
                          <InputLabel>ZIP Code *</InputLabel>
                          <Input
                          required
                          fullWidth={true}
                          disableUnderline={true}
                          sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                          placeholder="Enter ZIP code"></Input>
                      </Container>
                    </Container>
                  </Container>
            </Box>
            <Box sx={{
            padding: "24px",
            border: "1px solid rgba(225, 231, 239, 1)",
            borderRadius: "8px",
            marginBottom: "32px",
            }}>
             <Typography variant="h4" component="h2"
              sx={{
                display:"flex",
                alignItems:"start",
                gap:"8px",
                marginBottom:"24px",
                }}>
                {/* <CreditCardOutlinedIcon /> */}
                <img src={paymentIcon} alt="Payment Icon" width="20px" height="20px"/>
                  Payment Information
                  </Typography>
              <Container disableGutters
              sx={{
                marginBottom: "16px",
              }}>
                <Typography>
                    Payment Method
                  </Typography>
                  <RadioGroup
                    row
                    defaultValue={"credit-card"}
                    name="payment-method"
                    sx={{ display: 'flex', gap: 2 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            value="credit-card"
                            control={<Radio size="small"/>}
                            onClick={() => setSelectedPaymentMethod('credit-card')}
                            label={
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CreditCardOutlinedIcon sx={{ mr: 1, ml: 0.5 }} />
                                <Typography sx={{ fontWeight: 500 }}>Credit Card</Typography>
                              </Box>
                            }
                            sx={{
                              width: '100%',
                              m: 0,
                              border: `1px solid ${selectedPaymentMethod === "credit-card" ? "rgba(243, 78, 27, 1)" : "rgba(241, 245, 249, 1)"}`,
                              borderRadius: '6px',
                              bgcolor: `${selectedPaymentMethod === "credit-card" ? "rgba(243, 78, 27, 0.1)" : "transparent"}`
                            }}
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            value="paypal"
                            control={<Radio size="small" />}
                            onClick={() => setSelectedPaymentMethod('paypal')}
                            label={
                              <Typography sx={{ fontWeight: 'bold', color: '#003087', ml: 0.5 }}>
                                Pay<span style={{ color: '#009cde' }}>Pal</span>
                              </Typography>
                            }
                            sx={{
                              width: '100%',
                              m: 0,
                              border: `1px solid ${selectedPaymentMethod === "paypal" ? "rgba(243, 78, 27, 1)" : "rgba(241, 245, 249, 1)"}`,
                              borderRadius: '6px',
                              bgcolor: `${selectedPaymentMethod === "paypal" ? "rgba(243, 78, 27, 0.1)" : "transparent"}`
                            }}
                          />
                      </Grid>
                    </Grid>
                  </RadioGroup>
              </Container>
              <Container disableGutters sx={{display: `${selectedPaymentMethod === "credit-card" ? "" : "none"} `}}>
                <Container disableGutters
                sx={{
                  marginBottom: "16px",
                }}>
                  <InputLabel>Cardholder Name *</InputLabel>
                  <Input
                  fullWidth={true}
                  disableUnderline={true}
                  sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                  placeholder="Enter cardholder name"></Input>
                </Container>
                <Container disableGutters
                sx={{
                  marginBottom: "16px",
                }}>
                  <InputLabel>Card Number *</InputLabel>
                  <Input
                  fullWidth={true}
                  disableUnderline={true}
                  sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                  placeholder="Enter card number"></Input>
                </Container>
                <Container disableGutters
                sx={{
                  display: "flex",
                  gap: "16px",
                }}>
                  <Container disableGutters>
                  <InputLabel>Expiration Date *</InputLabel>
                  <Input
                  fullWidth={true}
                  disableUnderline={true}
                  sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                  placeholder="MM/YY"></Input>
                  </Container>
                  <Container disableGutters>
                  <InputLabel>CVV *</InputLabel>
                  <Input
                  fullWidth={true}
                  disableUnderline={true}
                  sx={{border: "1px solid rgba(225, 231, 239, 1)", borderRadius:"6px", padding:"13px", height:"40px"}}
                  placeholder="123"></Input>
                  </Container>
                </Container>
              </Container>
            </Box>
      </Container>
      </Grid>

      {/* Order Summary Block */}
      <Grid item lg={4}>
      <Container>
        <Box sx={
              {
                border: "1px solid rgba(225, 231, 239, 1)",
                borderRadius: "8px",
                padding: "25px",
                marginBottom: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "24px",
              }
            }>
              <Typography variant="h4">Order Summary</Typography>

              {/* Items In Cart */}
              <Container disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}>
                <Container disableGutters>
                  <Typography>OC Wildland T-Shirt</Typography>
                  <Typography>Qty: 1</Typography>
                </Container>
                  <Typography>$199.00</Typography>
              </Container>

              <Divider flexItem={true} sx={{color: "rgba(225, 231, 239, 1)"}} />
              {/* Subtotal Block */}

              <Container disableGutters>
                <Container disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <Typography>Subtotal</Typography>
                  <Typography>$199.00</Typography>
                </Container>
                <Container disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <Typography>Tax</Typography>
                  <Typography>$0.00</Typography>
                </Container>
                <Container disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <Typography>Shipping</Typography>
                  <Typography>$0.00</Typography>
                </Container>
              </Container>
              <Divider flexItem={true} sx={{color: "rgba(225, 231, 239, 1)"}} />
              {/* Total Amount */}
              <Container disableGutters
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">$199.00</Typography>
              </Container>


              <Button fullWidth sx={{
                padding:"10px 16px 11px 16px",
                background:"linear-gradient(103.54deg, rgb(238, 43, 43) 0%, rgb(243, 78, 27) 50%, rgb(248, 198, 48) 100%)",
                "&:hover": {color: "rgba(243, 78, 27, 1)", border:"1px solid rgba(243, 78, 27, 1)", background:"transparent"},
                transition: "background 1.5s ease",
                color:"white",
                borderRadius:"6px",
                boxShadow:"0, 0, 30px, -10px, rgba(243, 78, 27, 0.3)"}}>
                  Place Order
              </Button>

              <Typography variant="body1"
              sx={{
               }}>
              {/* <ShieldOutlinedIcon fontSize="small"/>  */}
              <img src={sslLogo} alt="SSL Logo" width="12px" height="12px"/>
              Secure checkout with SSL encryption</Typography>
        </Box>
      </Container>
      </Grid>
      </Grid>
  </div>);
}
