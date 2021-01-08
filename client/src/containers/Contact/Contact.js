import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SideBar from '../../campusCards/SideBar'
import Button from '@material-ui/core/Button';
import Layout from '../../componenets/Layout'
import firebase from 'firebase'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '85ch',
    },
  },
}));
const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  // const handelSubmit=(e)=>{
  //   e.preventDefault();

  //   firebase.firestore().collection('contacts')
  //   .add({
  //     name:name,
  //     email:email,
  //     message:message,
  //   })
  //   .then(()=>{
  //     alert('Message has been Sent');
  //     setloader(false);
  //   })
  //   .catch((error)=>{
  //     alert(error.message);
  //     setloader(false);
  //   });
  //   setname("");
  //   setemail("");
  //   setmessage("");
  // }
  const [loader, setloader] = useState(false)
  const handelSubmit = e => {
    e.preventDefault();
    toast.success('Successfully Sent!');
    axios({
      method: "POST",
      url: "http://localhost:3000/form",
      data: { ...state },
     
    }).then(() => {
        setloader(true);
        toast.success('Successfully Sent!');
      })
      .catch((error) => {
        setloader(false);
      });
  }
  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };
    const classes = useStyles();
    return (
        <>
        <br/>
        <Layout>
          
        <SideBar/>
        
        <div style={{textAlign:"center"}}>
      
<h1 style={{color:"blue"}}>Contact Us</h1>
<br/>
<h1 style={{marginTop:"15px",marginLeft:"300px"}}>College InfoConnect</h1>
<h3 style={{marginTop:"15px",marginLeft:"300px"}}>Stay updated anywhere,anytime</h3>
<h3 style={{marginLeft:"400px"}}>You can communicate to us your opinion about the present structure of Info-centre or come up with a new suggestion or report a bug. You can even post your queries using the form below.

In case of Login Issues, provide us with your admission number in contact message.</h3> 
<form className={classes.root} noValidate autoComplete="off" style={{marginLeft:"250px"}}>
      <TextField id="standard-basic" label="Name" value={state.name} onChange={onInputChange} name="name"/>
      <br/>
      <TextField id="standard-basic" label="Email"  value={state.email} onChange={onInputChange} name="email"/>
      <br/>
      <TextField id="standard-basic" label="Message" value={state.message} onChange={onInputChange}  name="message"/>
      <br/>
    <Button style={{backgroundColor:loader?"#ccc":"rgb(2,2,110)",color:"white"}} variant="contained" onClick={handelSubmit} >Submit Here</Button>
    </form>
    <p style={{marginLeft:"300px",marginTop:"100px"}}>Only message if necessary for regarding any issye you can contact Register Office Thank You !</p>
        </div>
     
        </Layout>
        <Toaster/>
        </>
        
    )
}

export default Contact
