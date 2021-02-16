import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainLayout from "../layout/MainLayout";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Button,
  Snackbar,
  Container,
  TextField,
  FormControl,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useRouter } from "next/router";
import { coinList } from "../commonSetting";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendModal from "../components/Modals/SendModal";
const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
  },
  commonGrid: {
    padding: "15px",
  },
  TextField: {
    fontSize: "2rem",
    textAlign: "center",
  },
}));

function Transmit() {
  const classes = useStyles();
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [selectedCoin, setSelectedCoin] = useState([coinList[0]]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const selectBoxGenerator = (list) => {
    if (!list || !list.length) return <option></option>;

    return list.map((v) => {
      return (
        <option key={v} value={v}>
          {v}
        </option>
      );
    });
  };
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.backButton}
            color="inherit"
            onClick={() =>
              router.push({
                pathname: "/",
                query: {
                  tab: 1,
                },
              })
            }
          >
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container style={{ padding: "0 5% 5% 5%" }}>
        <Grid item xs={12}>
          <Typography variant="h5">전송</Typography>
        </Grid>

        <Grid item xs={12} className={classes.commonGrid}>
          <select
            onChange={(v) => {
              setSelectedCoin(v.target.value);
            }}
            style={{
              float: "right",
              outline: "none",
              minWidth: "50%",
              maxHeight: "30px",
              margin: "auto 0",
              backgroundColor: "#FAFAFA",
              border: "none",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            {selectBoxGenerator(coinList)}
          </select>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.commonGrid}>
        <Typography variant="subtitle1">Amount</Typography>
        <TextField
          type="text"
          value={amount}
          helperText={` 120.62 ${selectedCoin} Available`}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          fullWidth
          InputProps={{
            classes: {
              input: classes.TextField,
            },
            endAdornment: <InputAdornment>{selectedCoin}</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} className={classes.commonGrid}>
        <Button
          style={{ borderRadius: "10px", minHeight: "50px" }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            setOpen(true);
          }}
        >
          전송
        </Button>
      </Grid>
      <SendModal
        open={open}
        handleClose={handleClose}
        coinType={selectedCoin}
        amount={amount}
      />
    </div>
  );
}

Transmit.Layout = MainLayout;

export default Transmit;
