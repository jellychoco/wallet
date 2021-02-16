import React from 'react'
import { useRouter } from "next/router";
import MainLayout from "../layout/MainLayout";
import { Check } from '@material-ui/icons';
import { Button, Typography } from '@material-ui/core';
function sendComplete() {
    const router = useRouter()

    console.log(router.query.sendAmount)
    return (
        <div style={{position:"relative",backgroundColor:"white",height:'100vh',display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
          
            <div style={{textAlign:"center",width:"50%",marginTop:"5%"}}>
                <Check style={{fontSize:"50px",backgroundColor:"lightgray",borderRadius:"50%",margin:"5%"}}/>
                <Typography style={{margin:"5%"}} variant="h5">전송완료</Typography>
                <Typography style={{margin:"5%"}} variant="subtitle2">{router.query.sendAmount}</Typography>
            </div>

            <div style={{width:"50%",textAlign:"center"}}>
                <Button onClick={()=>{router.push({
                    pathname:"/",
                    query:{
                        tab:1
                    }
                })}} style={{border:"1px solid black",color:"black"}} fullWidth>완료</Button>
            </div>
                <div style={{cursor:"pointer",position:"absolute",bottom:"5%",textDecoration:"underline",color:"gray"}}>Trade details</div>
        </div>
    )
}

sendComplete.Layout = MainLayout;
export default sendComplete
