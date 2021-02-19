import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import CopyAbleBox from "../Utils/CopyAbleBox"
import {coinList} from "../../commonSetting"
import QRCode from "qrcode.react"
import {
  FormControl,
  Input,
  Slide,
  TextField,
  Typography,
  Button,
} from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    marginBottom: "5%",
    minHeight: "40%",
    outline: "none",
    maxWidth: "800px",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function AddContactModal({open, handleClose, addFriend}) {
  const classes = useStyles()

  const transmitData = (e) => {
    e.preventDefault()
    const {target} = e

    // const information = {
    //   id: target[0].value,
    //   name: target[1].value,
    //   phone: target[2].value,
    //   address: target[3].value,
    // }

    addFriend({
      id: target[0].value,
      name: target[1].value,
      phone: target[2].value,
      address: target[3].value,
    })

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
        <Slide direction='up' in={open}>
          <div className={classes.paper}>
            <form onSubmit={transmitData}>
              <TextField
                label='아이디'
                placeholder=''
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='이름'
                placeholder=''
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='휴대폰번호'
                placeholder=''
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label='지갑주소'
                placeholder=''
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div style={{margin: "5% 0px 0px 0px"}}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                  style={{borderRadius: "10px"}}
                >
                  추가
                </Button>
                <Button onClick={handleClose} style={{color: "gray"}} fullWidth>
                  취소
                </Button>
              </div>
            </form>
            <div></div>
          </div>
        </Slide>
      </Modal>
    </div>
  )
}
