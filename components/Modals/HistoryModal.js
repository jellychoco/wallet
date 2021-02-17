import React, { useState, useRef } from "react"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import SwipeableViews from "react-swipeable-views"
import CopyAbleBox from "../Utils/CopyAbleBox"
import { feeRate } from "../../commonSetting"
import QRCode from "qrcode.react"
import PropTypes from "prop-types"
import { useRouter } from "next/router";
import {
    withStyles,
    makeStyles,
    Typography,
    Tab,
    useTheme,
    AppBar,
    Tabs,
    Box,
    Slide
} from "@material-ui/core"
function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1}>
                    <Typography component={"span"}>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    }
}



export default function HistoryModal({
    open,
    handleClose,
    content,
    amount,
    coinType,
}) {
    const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    
    paper: {
        width: "100%",
        height: "70%",
        outline: "none",
        maxWidth: "800px",
        borderRadius: "10px",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
    },
    root: {
        position: "relative",
        overflow: "auto",
        paddingBottom: "50px",
    },
    GridCover: {
        padding: "20px",
    },
    tapRoot: {
        backgroundColor: "white",
    },
}))
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Slide direction="up" in={open}>
                    <div className={classes.paper}>
                        <div>
                            <Typography variant='h6'>
                                기록 {amount} {coinType}
                            </Typography>
                        </div>

                        <div className={classes.tapRoot}>
                            <AppBar
                                position='static'
                                style={{ backgroundColor: "white", boxShadow: "none" }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor='primary'
                                    textColor='primary'
                                    variant='fullWidth'
                                >
                                    <Tab label='All' {...a11yProps(0)} />
                                    <Tab label='send' {...a11yProps(1)} />
                                    <Tab label='receive' {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                   <div>
                                       all
                                   </div>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <div>
                                        send
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                    <div>receive
                                        </div>
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                    </div>
                </Slide>
            </Modal>
        </div>
    )
}
