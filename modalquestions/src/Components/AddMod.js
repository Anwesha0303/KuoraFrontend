import  React from "react";
import { Typography,makeStyles,Paper, Button,TextField,Grid} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';
import  { useState, useEffect } from "react";


const styles = makeStyles({
  paper:{
    heigth:pxToRem(100),
    width:pxToRem(1130),
    background: "#2A3E4C 0% 0% no-repeat padding-box",
    boxShadow: "0px 8px 24px #00000029",
    borderRadius: pxToRem(6),
    opacity: 1,
    overflow:"hidden"
    },
  cancelButton:{
    background: "#2C404E 0% 0% no-repeat padding-box",
    border:"1px solid #14AFF1",
    borderRadius: pxToRem(10),
    textTransform:"None",
    color:"#FFFFFF",
    opacity: 1,
    height:pxToRem(45),
    width:pxToRem(92),
    minHeight:pxToRem(45),
    minWidth:pxToRem(92)
    },
  clearButton:{
    background: "#2C404E 0% 0% no-repeat padding-box",
    border:"1px solid #14AFF1",
    borderRadius: pxToRem(10),
    textTransform:"None",
    color:"#FFFFFF",
    opacity: 1,
    height:pxToRem(45),
    width:pxToRem(92),
    minHeight:pxToRem(45),
    minWidth:pxToRem(92)
    },
  addButton:{
    background: "#14AFF1 0% 0% no-repeat padding-box",
    border:"1px solid #14AFF1",
    borderRadius: pxToRem(10),
    textTransform:"None",
    color:"#FFFFFF",
    opacity: 1,
    height:pxToRem(45),
    width:pxToRem(92),
    minHeight:pxToRem(45),
    minWidth:pxToRem(92)
    },
  texts:{
    height:pxToRem(23),
    textAlign:"left",
    font: "normal normal normal Ubuntu",
    fontSize:pxToRem(20),
    letterSpacing: pxToRem(0),
    color:"#97A1A9",
    opacity: 1,
    whiteSpace:"nowrap",
    marginRight:pxToRem(15)
    },
  searchField1:{
    height:pxToRem(40),
    width:pxToRem(300),
    margin:"auto", 
    borderRadius: pxToRem(8),
    flexFlow:"row nowrap"
    },
  searchField2:{
    height:pxToRem(191),
    width:pxToRem(300),
    marginLeft:pxToRem(90), 
    borderRadius: pxToRem(8),
    flexFlow:"row nowrap"
    },
  add:{
    variant: 'outlined',
    disableRipple: 'true',
    marginLeft: '37.2vw',
    height: '4.7vh',
    width:'5.15vw',
    paddingLeft: '2px',
    fontSize: '1.056vw',
    fontFamily: 'Ubuntu',
    color: 'black',
    borderRadius: '0.5rem',
    border: '0.04rem solid #14AFF1',
    textTransform: 'none',
  },
  searchBar:{
    border: "1px solid #356680",
    borderRadius: pxToRem(8),
    width:"100%",
    height:"100%",
    opacity:1,
    backgroundColor:"#283A46",
    color:"#FFFFFF"
  },
});
    const AddMod = (props) => {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = styles();
  const [employee, setEmployee] = useState({ title: '',
    questions: '',
  });  
  const resetForm = () => {
    setEmployee(employee);
  }
  const onChange = (e) => {  
    e.persist();  
debugger;  
 setEmployee({...employee, [e.target.name]: e.target.value});  
}
const Add = (e) => {  
    e.preventDefault();   
    const data = { title:employee.title, 
                  questions: employee.questions }; 
                    console.log(data);
    handleClose();
  };
    
return (
   <div>
      <Button onClick={handleClickOpen} className={ classes.add} variant="outlined" color="primary" disableElevation startIcon={<AddIcon />} >
        Add
      </Button>
     <Dialog maxWidth={true}  scroll="body" open={open} onClose={handleClose} classes={{paper:classes.paper}}>
     <DialogTitle style={{color:"#FFFFFF"}}>
    <Grid container  style={{flexFLow:"row nowrap",justifyContent:"flex-start"}}>
    <Grid item >{"Add Invoice"}</Grid>
    <Grid item style={{marginLeft:pxToRem(850)}}><CloseIcon className={classes.closeIcon} onClick={handleClose}/></Grid>
    </Grid>
    </DialogTitle>
    <DialogContent dividers>
    <Grid container spacing={5} >
       <Grid item >
          <Grid container>
              <Grid item className={classes.texts}> Title </Grid>
              <Grid item className={classes.searchField1} ><input className={classes.searchBar}type="text"
              name="title"
              onChange={ onChange }
              /></Grid>
              </Grid><br/>
              </Grid>
              <Grid container style={{flexFlow:"row nowrap"}}>
              <Grid item className={classes.texts}>Ask your Questions</Grid>
              <Grid item className={classes.searchField2}><textarea placeholder="Write your Questions Here..." className={classes.searchBar}
                name="questions"
                onChange={ onChange }/></Grid>
                </Grid>
             </Grid>
          </DialogContent>
          <DialogActions style={{padding:pxToRem(20)}}>
            <Grid container>
            <Button onClick={handleClose} className={classes.cancelButton}>
             Cancel
            </Button>
            </Grid>
            <Button onClick={resetForm} className={classes.clearButton}>
             Clear
            </Button>
            <Button onClick={Add} className={classes.addButton} >
              Add
            </Button>
       </DialogActions>
    </Dialog>
  </div>
    );
  }
  export default AddMod;