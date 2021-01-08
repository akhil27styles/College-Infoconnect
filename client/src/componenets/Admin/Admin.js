import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Layout from '../../componenets/Layout'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../campusCards/Footer/Footer';
const useStyles = makeStyles({
    root: {
      maxWidth: 545,
      marginLeft:800,
      marginTop:15,
    },
    content:{
        margin:110,
        marginLeft:150
    },
    button:{
        marginLeft:50,
        marginTop:30,
        padding:5,
    }
  });
const Admin = () => {
    const [id, setid] = useState("")
    const [loggedin, setloggedin] = useState(false)
    const [name, setname] = useState("")
    let history = useHistory();

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    const handle=async(e)=>{
    e.preventDefault();
  if(id==="jss@12" || id=="jss@34"|| id=="jss@56"){
    toast.success('Successfully login!');
    await sleep(3000)
  history.push("/AdminPost");
  setloggedin(true);
  }
  else{
    toast.error('You are not an Admin');
  }
    }

    
    return (
   
        <div>
          <div className="bg-image" style={{marginTop:"10px"}}>

         
          <Layout/>

          <br/>  <br/><br/> <br/> <br/>  
          <Card style={{marginLeft:"600px",marginRight:"600px"}}>

          <CardActionArea>

          <CardContent>

            
          <Typography variant="body2" color="textSecondary" component="p">
         <h1 style={{textAlign:"center"}}>College-InfoConnect Admin Login</h1> 
         <hr></hr>
         <br></br>
           <TextField id="standard-basic" label="Name"  value={name} name="name"onChange={(e)=>setname(e.target.value)} style={{marginLeft:"300px"}}/>
           <br/> <br/><br/>
           <TextField id="standard-basic" label="email" value={id} name="id" onChange={(e)=>setid(e.target.value)} style={{marginLeft:"300px"}}/>
           <br/> <br/> <br/>
           <TextField id="standard-basic" label="CollegeId" value={id} name="id" onChange={(e)=>setid(e.target.value)} style={{marginLeft:"300px"}}/>
           <br/> <br/> <br/>
           <TextField id="standard-basic" label="PinNumber" value={id} name="id" onChange={(e)=>setid(e.target.value)} style={{marginLeft:"300px"}}/>
           </Typography>
          <CardActions>
          <br/> <br/> <br/> <br/>
         <Button  size="small" color="primary"  variant="contained" onClick={handle} style={{marginLeft:"300px"}}>Loged In</Button>
         </CardActions>
    </CardContent>
      </CardActionArea>
     
    </Card>
      <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  
     </div>
    
     <Footer />
 <Toaster />
   
        </div>
    )
}

export default Admin
