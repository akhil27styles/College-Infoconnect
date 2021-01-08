import React ,{useState} from 'react'
import 'firebase/firestore'
import firebase from 'firebase'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Footer from '../../campusCards/Footer/Footer';
import {NavLink,Link} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
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
  
const AdminPost = () => {
const today=new Date();
const [post, setpost] = useState("");
const [postby, setpostby] = useState("");
const [details, setdetails] = useState("");
const formSubmit=(e)=>{
    e.preventDefault();
        firebase.firestore().collection('Notices')
        .add({
          
                Date:today,
                Post: post,
                PostedBy: postby,
                Details: details
        }).then(()=>{
          toast.success('Successfully Posted!');
          })
          .catch((error)=>{
            toast.error('Not able to post!');
          });
}

const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
           
           <Card className={classes.root}>
               <h1 style={{textAlign:"center",backgroundColor:"#1D4975",color:"white",height:"170px"}}> <Link to="/" style={{ textDecoration: 'none',color:"white",fontStyle:"italic",marginRight:"10px" }}>
         InfoConnect
                          </Link>Post Notice</h1>
               <CardContent>
               <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
            <Avatar>Ad</Avatar>
          </Grid>
          <Grid item xs>
            <Typography style={{marginLeft:"740px"}}>
            <TextField id="outlined-basic" label="Post" value={post} name="post"onChange={(e)=>setpost(e.target.value)} style={{width:"70ch"}}/>
           <br/><br/>
            <TextField id="outlined-basic" label="Post By" value={postby} name="postby"onChange={(e)=>setpostby(e.target.value)} style={{width:"70ch"}}/>
            <br/><br/>
            <TextField id="outlined-basic" label="CollegeId" variant="outlined" style={{width:"70ch"}}/>
            <br/><br/>
            <TextField
          id="outlined-multiline-static"
          label="Details"
          multiline
          rows={10}
          style={{width:"700px"}}
          defaultValue="Dear Students"
          variant="outlined"
          onChange={(e)=>setdetails(e.target.value)}
          value={details} name="details"
          style={{width:"70ch"}}/>
            {/* <button onClick={formSubmit}>Post</button> */}
            <br/><br/><br/>
            <Button variant="outlined" onClick={formSubmit}>Post The Notice to Infoconnect</Button>

            </Typography>
          </Grid>
        </Grid>
      </Paper>
        
        </CardContent>
    </Card>
    <br/><br/><br/><br/>
        <Footer/>
         
        <Toaster />
        </div>
    )
}

export default AdminPost
