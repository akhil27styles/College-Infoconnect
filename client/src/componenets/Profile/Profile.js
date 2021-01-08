import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Footer from  '../../campusCards/Footer/Footer'
import Layout from '../../componenets/Layout'
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const Profile = () => {
    const classes = useStyles();
    const auth = useSelector(state => state.auth);
    
    return (
        <>
        <br/>
        <Layout/>
        <Card className={classes.root}>
                
           <CardContent>
       
           <hr/>
           </CardContent>
           
           </Card>
            <Card className={classes.root}>
            <h1 style={{textAlign:"center",marginTop:"20px"}}> Student -Profile</h1>
            <Avatar src="/broken-image.jpg" style={{width:"200px",height:"200px",marginLeft:"55rem"}}/>    
           <CardContent style={{marginLeft:"50rem",marginTop:"10rem"}}>
       
        <h1 style={{marginTop:"8px"}}>{auth.authenticated?`
             First Name :${auth.firstName}`:''}</h1>
         
         
            <h1 style={{marginTop:"50px"}}>{auth.authenticated?`
             Last Name :${auth.lastName}`:''}</h1>
          
       
            <h1 style={{marginTop:"70px"}}>{auth.authenticated?`
             Email : ${auth.email}`:''}</h1>
            
      
        
      </CardContent>
     
    </Card>
    <Footer/>
      </>      
             
      
    )
}

export default Profile
