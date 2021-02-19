import { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { Avatar, BottomNavigation, BottomNavigationAction, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Home, CompareArrows, AccountBalanceWallet, WebAsset, Explore, DataUsage, ImportContacts } from '@material-ui/icons'
import Data from '../components/Data'
import Asset from '../components/Asset'
import Contact from '../components/Contact'
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    position: 'relative',
    backgroundColor: "#FFFFFF",
  }
}))

const user = {
  id: 'JELLYCHOCO',
  name: "jaemin",
  profileImage: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
}

const Index = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [severity, setSeverity] = useState('error')
  const [message, setMessage] = useState('')
  const classes = useStyles()
  const router = useRouter()
  const [tab, setTab] = useState(router.query.tab !== undefined ? Number(router.query.tab) : 0)
  const showAlert = (type, msg) => {
    setSeverity(type)
    setMessage(msg)
    setOpenAlert(true)
  }
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenAlert(false)
  }

  const getContent = (step) => {

    switch (step) {
      case 0:
        return (<Data user={user} showAlert={showAlert} />);
      case 1:
        return (<Asset showAlert={showAlert} />);
      case 2:
        return (<Contact showAlert={showAlert} />);
    }
  }

  return (
    <div className={classes.root} >
      {getContent(tab)}
      <BottomNavigation
        showLabels
        value={tab}
        onChange={(event, newValue) => {
          setTab(newValue);
        }}
      >
        <BottomNavigationAction label="HOME" icon={<DataUsage />} />
        <BottomNavigationAction label="ASSET" icon={<WebAsset />} />
        <BottomNavigationAction label="CONTACT" icon={<ImportContacts />} />
      </BottomNavigation>
    </div>
  )
}

Index.Layout = MainLayout

export default Index
