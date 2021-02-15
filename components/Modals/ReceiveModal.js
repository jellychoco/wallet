import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import CopyAbleBox from "../Utils/CopyAbleBox"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  paper: {
    // margin:"0px 10px 50px 10px",
    minWidth:"90%",
    minHeight:"40%",
    outline: "none",
    maxWidth: "90%",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function ReceiveModal({ open, handleClose, content }) {
  const classes = useStyles()
  let type = "Receive"
  let address = "902390dksaodadasdfasjkofasjokso"
  let coinTypes = ["ETH", "BIT", "EOS"]

  const selectBoxGenerator = (list) => {
    if (!list || !list.length) return <option></option>

    return list.map((v) => {
      return <option value={v}>{v}</option>
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
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h3 id='transition-modal-title'>Receive</h3>
            <select
              onChange={(v) => {
                console.log(v.target.value)
              }}
              style={{ outline: "none",minWidth:"50%",maxHeight:"30px",margin:"auto 0",backgroundColor:"#FAFAFA",border:"none",borderRadius:"5px",padding:"5px" }}
            >
              {selectBoxGenerator(coinTypes)}
            </select>

            </div>
            <div>
              <h4>지갑주소</h4>
              <CopyAbleBox content={"dksafkpaskp"}/>
             </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
