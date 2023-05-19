"use client";
import {
  Card,
  CardContent,
  CardHeader,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
  CardActions,
  Container,
  styled,
  Divider,
  useTheme,
} from "@mui/material";
import { borderBottom } from "@mui/system";
import RadioGroupContext from "@mui/material/RadioGroup/RadioGroupContext";
import { blue, green, grey } from "@mui/material/colors";

const MyComponent = styled("div")({
  position: "fixed",
  top: 0,
  width: "100%",
});
const MyComponent1 = styled("div")({
  position: "relative",
  width: "100%",
  bottom: 0,
  textAlign: "center",
});
export default function Home() {
  const theme = useTheme();
  return (
    <>
      <MyComponent>
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: "grey.200",
            mb: 4,
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
          }}
        >
          <Typography variant="h6">Company name</Typography>
          <Tabs sx={{ marginLeft: "auto" }}>
            <Tab sx={{ color: theme.palette.common.white }} label="Features" />
            <Tab
              sx={{ color: theme.palette.common.white }}
              label="Enterprise"
            />
            <Tab sx={{ color: theme.palette.common.white }} label="support" />
            <Tab sx={{ color: theme.palette.common.white }} label="Pricing" />
          </Tabs>
          <Button variant="contained" color="secondary">
            Sign up
          </Button>
        </Toolbar>
      </MyComponent>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ p: 8, paddingBottom: 2 }}>
          Pricing
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 4 }}>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It&apos;s built with default Bootstrap
          components and utilities with little customization. customization.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Free
              </Typography>
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  $0<small className="text-mute">/ mo</small>
                </Typography>
                <Typography variant="subtitle1" align="center">
                  10 users included
                </Typography>
                <Typography variant="subtitle1" align="center">
                  2 GB of storage
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Email support
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Help center access
                </Typography>
              </CardContent>
              <Box textAlign="center" sx={{ py: 2 }}>
                <Button variant="outlined">Sign up for free</Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Pro
              </Typography>
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  $15<small className="text-mute">/ mo</small>
                </Typography>
                <Typography variant="subtitle1" align="center">
                  20 users included
                </Typography>
                <Typography variant="subtitle1" align="center">
                  10 GB of storage
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Priority email support
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Help center access
                </Typography>
              </CardContent>
              <Box textAlign="center" sx={{ py: 2 }}>
                <Button variant="contained">Get started</Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Enterprise
              </Typography>
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  $29
                  <small className="text-muted"> /mo</small>
                </Typography>
                <Typography variant="subtitle1" align="center">
                  30 users included
                </Typography>
                <Typography variant="subtitle1" align="center">
                  15 GB of storage
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Phone and email support
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Help center access
                </Typography>
              </CardContent>
              <Box textAlign="center" sx={{ py: 2 }}>
                <Button variant="contained">Contact us</Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
        {/* <hr className="my-4" /> */}
        <Divider variant="middle" sx={{ mb: 4 }} />
      </Container>
      <MyComponent1>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Box
              component="img"
              sx={{
                height: 30,
              }}
              alt="The house from the offer."
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            />
            <Typography variant="subtitle1">© 2017-2018</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Features
            </Typography>
            <Typography variant="subtitle1">Cool stuff</Typography>
            <Typography variant="subtitle1">Random feature</Typography>
            <Typography variant="subtitle1">Team feature</Typography>
            <Typography variant="subtitle1">Stuff for developers</Typography>
            <Typography variant="subtitle1">Another one</Typography>
            <Typography variant="subtitle1">Last time</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Resources
            </Typography>
            <Typography variant="subtitle1">Resource</Typography>
            <Typography variant="subtitle1">Resource namee</Typography>
            <Typography variant="subtitle1">Another resource</Typography>
            <Typography variant="subtitle1">Final resource</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              About
            </Typography>
            <Typography variant="subtitle1">Team</Typography>
            <Typography variant="subtitle1">Locations</Typography>
            <Typography variant="subtitle1">Privacy</Typography>
            <Typography variant="subtitle1">Terms</Typography>
          </Grid>
        </Grid>
      </MyComponent1>
    </>
  );
}
