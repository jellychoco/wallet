import {useEffect,useState} from 'react'
import MainLayout from '../layout/MainLayout'
import { Avatar, BottomNavigation, BottomNavigationAction, Snackbar } from '@material-ui/core'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import {Home,CompareArrows,AccountBalanceWallet,WebAsset,Explore, DataUsage} from '@material-ui/icons'
import Data from '../components/Data'
import Asset from '../components/Asset'
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    position: 'relative',
    backgroundColor:"#FFFFFF",
  }
}))

const user = {
  id:'wanghanyang',
  name:"jaemin",
  profileImage:"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
}

const Index = () => {
  const classes = useStyles()
  const router = useRouter()
  const [tab, setTab] = useState(router.query.tab !== undefined ? Number(router.query.tab) : 0)
  
  const getContent = (step) => {
    // if (user.me === undefined || user.me === null) {
    //   router.push('/login')
    //   return <Loading />
    // }

    switch (step) {
      case 0:
        return (<Data user={user}/>);
      case 1:
        return (<Asset/>);
      default:
        return null;
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
        <BottomNavigationAction label="DATA" icon={<DataUsage />} />
        <BottomNavigationAction label="ASSET" icon={<WebAsset />} />
        <BottomNavigationAction label="EXPOLORE" icon={<Explore />} />
      </BottomNavigation>
    </div>
  )
}

Index.Layout = MainLayout

export default Index
