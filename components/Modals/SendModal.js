import React, { useState } from "react"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import SwipeableViews from "react-swipeable-views"
import CopyAbleBox from "../Utils/CopyAbleBox"
import { feeRate } from "../../commonSetting"
import QRCode from "qrcode.react"
import PropTypes from "prop-types"
import {
    withStyles,
    makeStyles,
    Typography,
    Tab,
    useTheme,
    AppBar,
    Tabs,
    Box,
    TextField,
    InputAdornment,
    IconButton,
    Slider,
} from "@material-ui/core"
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete"
import { CropFree, RecentActors } from "@material-ui/icons"
const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
]

const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"

const IOSSlider = withStyles({
    root: {
        color: "primary",
        height: 2,
        padding: "15px 0",
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: "#fff",
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        "&:focus, &:hover, &$active": {
            boxShadow:
                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 12px)",
        top: -22,
        "& *": {
            background: "transparent",
            color: "#000",
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: "#bfbfbf",
    },
    mark: {
        backgroundColor: "#bfbfbf",
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: "currentColor",
    },
})(Slider)
function TabContent() {
    const classes = useStyles()
    const [value, setValue] = useState(30)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div>
            <div>
                <Autocomplete
                    freeSolo
                    limitTags={1}
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label='받는사람'
                            placeholder='주소'
                            margin='normal'
                            InputProps={{
                                ...params.InputProps,
                                shrink: true,
                                type: "search",
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <CropFree />
                                        </IconButton>
                                        <IconButton>
                                            <RecentActors />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />
            </div>

            <div style={{ width: "100%" }}>
                <Typography variant='subtitle2'>Fee</Typography>
                <IOSSlider
                    getAriaValueText={(text) => {
                        console.log(text * feeRate)
                    }}
                    defaultValue={0}
                />
            </div>
        </div>
    )
}

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
                    <Typography>{children}</Typography>
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

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    paper: {
        // margin:"0px 10px 50px 10px",
        width:"100%",
        minHeight: "40%",
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

export default function SendModal({
    open,
    handleClose,
    content,
    amount,
    coinType,
}) {
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
                // aria-labelledby="transition-modal-title"
                // aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                // BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div>
                            <Typography variant='h5'>
                                Send {amount} {coinType}
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
                                    <Tab label='Address' {...a11yProps(0)} />
                                    <Tab label='Phone' {...a11yProps(1)} />
                                    <Tab label='Email' {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <TabContent />
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <TabContent />
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                    <TabContent />
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
