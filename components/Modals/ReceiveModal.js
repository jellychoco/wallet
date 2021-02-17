import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import CopyAbleBox from "../Utils/CopyAbleBox"
import { coinList } from '../../commonSetting'
import QRCode from 'qrcode.react'
import { Slide, Typography } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    marginBottom:"5%",
    minHeight: "40%",
    outline: "none",
    maxWidth: "800px",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function ReceiveModal({ open, handleClose, content }) {
  const classes = useStyles()

  const selectBoxGenerator = (list) => {
    if (!list || !list.length) return <option></option>

    return list.map((v) => {
      return <option key={v} value={v}>{v}</option>
    })
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
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up"  in={open}>
          <div className={classes.paper}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">받기</Typography>
              <select
                onChange={(v) => {
                  console.log(v.target.value)
                }}
                style={{ outline: "none", minWidth: "50%", maxHeight: "30px", margin: "auto 0", backgroundColor: "#FAFAFA", border: "none", borderRadius: "5px", padding: "5px" }}
              >
                {selectBoxGenerator(coinList)}
              </select>

            </div>
            <div style={{marginTop:"20px"}}>
              <Typography variant="subtitle2" style={{color:"gray"}}>지갑주소</Typography>
              <CopyAbleBox  content={"dksafkpaskp"} />
            </div>
          </div>
        </Slide>
      </Modal>
    </div>
  )
}
