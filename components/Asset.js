import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useRouter } from "next/router";
import {
  Paper,
  Grid,
  Card,
  Avatar,
  Button,
  Typography,
  Container,
  Divider,
  LinearProgress,
  IconButton,
  makeStyles,
  AppBar,
  Tabs,
  useTheme,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Apple, CallMade, CallReceived } from "@material-ui/icons";
import Tab from "@material-ui/core/Tab";
import CoinsTap from "./Asset/CoinsTap";
import CollectiblesTap from "./Asset/CollectiblesTap";
// import PopupModal from './PopupModal'
import ReceiveModal from "./Modals/ReceiveModal";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "auto",
    padding: "20px",
    paddingBottom: "50px",
  },
  GridCover: {
    padding: "20px",
  },
  tapRoot: {
    backgroundColor: "white",
  },
}));

function Asset() {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.GridCover} item xs={12}>
        <Typography style={{ textAlign: "center" }} variant="h4">
          $180.62820
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "20px 0px 20px 0px",
          }}
        >
          <IconButton onClick={()=>{
            router.push('/transmit')
          }} color="primary">
            <CallMade />
          </IconButton>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
            color="primary"
          >
            <CallReceived />
          </IconButton>
          <IconButton color="primary">
            <Apple />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.tapRoot}>
          <AppBar
            position="static"
            style={{ backgroundColor: "white", boxShadow: "none" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Coins" {...a11yProps(0)} />
              <Tab label="Collectibles" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <CoinsTap />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <CollectiblesTap />
            </TabPanel>
          </SwipeableViews>
        </div>
      </Grid>
      <ReceiveModal open={open} handleClose={handleClose} />
      {/* <PopupModal open={open} closeModal={closeModal}/> */}
    </Grid>
  );
}

export default Asset;
