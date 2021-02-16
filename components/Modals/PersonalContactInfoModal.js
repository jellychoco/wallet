import React,{useState} from "react"
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
  Avatar,
  IconButton
} from "@material-ui/core"
import {ArrowBack, Cancel, Close} from "@material-ui/icons"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  paper: {
    overflow:"auto",
    width: "100%",
    height: "100%",
    outline: "none",
    maxWidth: "800px",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function PersonalContactInfoModal({open, handleClose, data}) {
  const classes = useStyles()
  const [isEdit,setIsEdit] = useState(true)
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
            <div
              style={{
                height:"48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ArrowBack onClick={handleClose} fontSize='large' />
              <IconButton onClick={()=>{
                  setIsEdit(!isEdit)
              }}>

              <Typography>{isEdit ? "수정" :"완료"}</Typography>
              </IconButton>
            </div>

            <div style={{display:"flex",justifyContent:"space-evenly",width:"100%",flexDirection:"column",height:"calc(100% - 62px)"}}>
              {/* main */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{width: "75px", height: "75px"}}
                  src={data?.profileImage}
                />
                <Typography style={{paddingTop:"20px"}} variant="h6">{data?.name}</Typography>
              </div>

              <div>
              <TextField
                  label='아이디'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                    
                  }}
                  defaultValue={data?.id}
                  inputProps={{
                    readOnly: isEdit,
                  }}
                />
                 <TextField
                  label='이름'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                    
                  }}
                  defaultValue={data?.name}
                  inputProps={{
                    readOnly: isEdit,
                  }}
                />
                 <TextField
                  label='휴대폰번호'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                    
                  }}
                  defaultValue={data?.phone}
                  inputProps={{
                    readOnly: isEdit,
                  }}
                />
                 <TextField
                  label='지갑주소'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                    
                  }}
                  defaultValue={data?.address}
                  inputProps={{
                    readOnly: isEdit,
                  }}
                />
              </div>
                
                <div style={{maxWidth:"500px",margin:"0 auto",width:"100%"}} >
                  <div style={{display:"flex",marginBottom:"10px",height:"50px"}}>
                   <Button color="primary" variant="contained" style={{borderRadius:"10px",width:"100%",marginRight:"5px"}}><Typography variant="button">INVITE</Typography></Button>
                   <Button color="secondary" variant="contained" style={{borderRadius:"10px",backgroundColor:"white",width:"100%",marginLeft:"5px"}}><Typography variant="button">trasnfer</Typography></Button>
                  </div>
                  <div>

                   <Button style={{width:"100%",height:"50px",backgroundColor:"#FAFAFA",borderRadius:"10px",color:"dimgray"}}>Share My Authorization</Button>
                    </div>
                </div>

            </div>
          </div>
        </Slide>
      </Modal>
    </div>
  )
}
