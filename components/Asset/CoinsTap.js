import {Avatar, Typography} from "@material-ui/core"
import React,{useState} from "react"
import {coinLogo} from "../../commonSetting"
import HistoryModal from "../Modals/HistoryModal";
import {useWindowDimensions} from '../Utils/Hooks'
function CoinsTap({headerHeight}) {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
  const keys = Object.keys(coinLogo)
  const values = Object.values(coinLogo)
  const generator = keys.map((v, i) => {
    return (
      <div key={i} onClick={()=>{
          setOpen(true)
      }} style={{display: "flex", alignItems: "center", margin: "5% 0 5% 0"}}>
        <Avatar src={values[i]} />
        <Typography>{v}</Typography>
      </div>
    )
  })

  return (
    <div style={{marginBottom: "10%", height: "auto"}}>
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}
      {generator}

      <HistoryModal open={open} handleClose={handleClose} />
    </div>
  )
}

export default CoinsTap
