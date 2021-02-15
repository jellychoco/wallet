import { useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useCookies } from 'react-cookie'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

// import { TOKEN } from '../lib/cookieConfig'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  }
}))

const MainLayout = props => {
  const { children } = props
  const classes = useStyles()
  const router = useRouter()
//   const [tokenCookie] = useCookies([TOKEN])

//   useEffect(() => {
//     if (tokenCookie[TOKEN] === undefined) {
//       router.replace('/login')
//     }
//   }, [])

//   if (tokenCookie[TOKEN] === undefined) {
//     return null
//   }
  return (
    <Container maxWidth="sm" className={classes.root}>
      {children}
    </Container>
  )
}

export default MainLayout