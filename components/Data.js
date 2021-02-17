import React from "react"
import PropTypes from "prop-types"
import { makeStyles, withStyles } from "@material-ui/core/styles"
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
} from "@material-ui/core"
import {
  AddCircle,
  ArrowForwardIos,
  MoreHoriz,
  RemoveCircleOutline,
  Add,
  ArrowForward,
} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
    paddingBottom: "50px",
  },
  GridCover: {
    padding: "20px",
  },
}))
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 40,
    borderRadius: 10,
    width: "80%",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "black",
  },
}))(LinearProgress)

function Data({ user }) {
  const { profileImage, name, id } = user
  const classes = useStyles()
  const avatarlist = [
    {
      name: "yunseok",
      profileImage: profileImage,
    },
    {
      name: "yunseok",
      profileImage: profileImage,
    },
    {
      name: "yunseok",
      profileImage: profileImage,
    },{
      name: "yunseok",
      profileImage: "",
    },{
      name: "yunseok",
      profileImage: "",
    },{
      name: "yunseok",
      profileImage: "",
    },{
      name: "yunseok",
      profileImage: "",
    },
  ]
  return (
    <Grid className={classes.root} container>
      {/* // */}
      <Grid style={{ display: "flex" }} item xs={12}>
        <Grid style={{ display: "flex", justifyContent: "center",paddingTop:"5%" }} item xs={4}>
          <Avatar style={{ textAlign: "center",height:"75px",width:"75px" }} src={user.profileImage} />
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          item
          xs={8}
        >
          <RemoveCircleOutline style={{ margin: "0px 10px 0px 10px" }} />
          <MoreHoriz style={{ margin: "0px 10px 0px 10px" }} />
        </Grid>
      </Grid>

      <Grid className={classes.GridCover} item xs={12}>
        <Typography style={{ color: "lightgray" }}>Morning</Typography>
        <Button style={{ fontSize: "1.25rem", padding: 0, display: "block" }}>
           {id}
          <ArrowForwardIos style={{ marginLeft: "10px" }} />
        </Button>
        <Typography variant='subtitle2' style={{ color: "gray" }}>
          ONT ID
        </Typography>
      </Grid>
        <Grid className={classes.GridCover} item xs={12}>
        <Grid style={{ display: "flex" }}>
          <Add
            fontSize='large'
            style={{ border: "1px solid #F2F2F2", borderRadius: "50%" }}
            color='primary'
          />{" "}
          {avatarlist.map((v,index) => {
            if(index < 3){

              return (
                <Avatar
                key={index}
                  style={{ margin: "0px 10px 0px 10px" }}
                  src={v.profileImage}
                />
              )
            } else if(index === 4) {
              return (
                   <MoreHoriz key={index} style={{ margin:"auto 0 auto 0" }} />
              )
            }
          })}
        </Grid>
        <Grid style={{ marginTop: "10px" }}>
          <Typography variant='subtitle1' style={{ color: "gray" }}>
            Quick Contract
          </Typography>
        </Grid>
      </Grid>

      {/* // */}
      <Grid className={classes.GridCover} item xs={12}>
        <Typography style={{ paddingBottom: "10px" }} variant='h6'>
          ONT Score
        </Typography>
        <div style={{ position: "relative", display: "flex" }}>
          <BorderLinearProgress variant='determinate' value={50} />
          <Typography
            variant='subtitle1'
            style={{
              color: "white",
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              paddingLeft: "10px",
            }}
          >
            768
          </Typography>
          <IconButton style={{ padding: 0,backgroundColor:"white" }}>
            <ArrowForward fontSize='large' style={{color:"black"}} />
          </IconButton>
        </div>
      </Grid>
      {/* // */}
      <Grid className={classes.GridCover} item xs={12}>
        <Typography style={{ paddingBottom: "10px" }} variant='h6'>
          Claims
        </Typography>
        <Grid
          spacing={2}
          style={{ margin: 0 }}
          justify='center'
          container
          item
          xs={12}
        >
          <Grid item xs={6}>
            <Card style={{ padding: "20px", position: "relative" }}>
              <Typography variant='subtitle2' style={{ color: "gray" }}>
                Authentication
              </Typography>
              <div style={{ color: "gray" }}>
                <Typography
                  style={{ display: "inline-block" }}
                  color='primary'
                  variant='h6'
                >
                  3
                </Typography>
                /4
              </div>
              <IconButton
                color="primary"
                style={{ position: "absolute", top: "50%", right: 0,padding:0,marginRight:"5%" }}
              >
                <ArrowForward />
              </IconButton>
            </Card>
          </Grid><Grid item xs={6}>
            <Card style={{ padding: "20px", position: "relative" }}>
              <Typography variant='subtitle2' style={{ color: "gray" }}>
                SocialNetwork
              </Typography>
              <div style={{ color: "gray" }}>
                <Typography
                  style={{ display: "inline-block" }}
                  color='primary'
                  variant='h6'
                >
                  10
                </Typography>
                /20
              </div>
              <IconButton
                color="primary"
                style={{ position: "absolute", top: "50%", right: 0,padding:0,marginRight:"5%" }}
              >
                <ArrowForward />
              </IconButton>
            </Card>
          </Grid><Grid item xs={6}>
            <Card style={{ padding: "20px", position: "relative" }}>
              <Typography variant='subtitle2' style={{ color: "gray" }}>
                Assets
              </Typography>
              <div style={{ color: "gray" }}>
                <Typography
                  style={{ display: "inline-block" }}
                  color='primary'
                  variant='h6'
                >
                  1
                </Typography>
                /4
              </div>
              <IconButton
                color="primary"
                style={{ position: "absolute", top: "50%", right: 0,padding:0,marginRight:"5%" }}
              >
                <ArrowForward />
              </IconButton>
            </Card>
          </Grid><Grid item xs={6}>
            <Card style={{ padding: "20px", position: "relative" }}>
              <Typography variant='subtitle2' style={{ color: "gray" }}>
                Personal
              </Typography>
              <div style={{ color: "gray" }}>
                <Typography
                  style={{ display: "inline-block" }}
                  color='primary'
                  variant='h6'
                >
                  2
                </Typography>
                /6
              </div>
              <IconButton
                color="primary"
                style={{ position: "absolute", top: "50%", right: 0,padding:0,marginRight:"5%" }}
              >
                <ArrowForward />
              </IconButton>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Data
