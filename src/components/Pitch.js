import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import client from "../client-1.jpg"
import client2 from "../client-2.jpg"


const useStyles = makeStyles((theme) => ({
  pitch: {
    alignItems: "content",
  },
  root: {
    width: '100%',
    maxWidth: "auto",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(0, 5),
    zIndex: -1,
    display: "center",
    alignItems: "center",
  },

  frontend: {
    background: "#f6f6f6",
    padding: "90px 0",
    borderRadius: "30px 2px 30px",
  },

  uxui: {
    background: "#f6f6f6",
    padding: "90px 0",
    borderRadius: "2px 30px 2px",
  },

  typography: {
    padding: theme.spacing(12, 0, 4, 0),
    textAlign: 'center',
    spacing: 8,
   },

   image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    padding:"3px",

    border: "3px solid #f6f6f6",
    borderRadius: "50%",
  },
}));

export default function Pitch() {
  const classes = useStyles();

  return (
    <div className="pitch">
     <Container id="pitch" className={classes.pitch} >
       <Typography className={classes.typography} variant="subtitle1" gutterBottom>
           <h3>ELEVATOR PITCH</h3>
           <div class="section-title-divider"></div>
           <h5>Hi my name is Kaiser A ÖzHun. I am Frontend UI developer.</h5>
        </Typography>
        <Grid container spacing={3} className={classes.root}>
             <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={client2} />
                </ButtonBase>
             </Grid>
               <Grid className={classes.frontend} item xs={8} xs container >
                     <ListItemText primary="Ai-Frontend Developer" secondary=" “Artificial Intelligence (Ai) is more accessible than ever before. Ai is has been incorporated into enterprises of all sizes, and verticals ranging from healthcare to smart home automation. Let's use Ai software development services and begin optimizing your business automation processes. Ai software to improve a host business intelligence (BI) software solutions, including tools for sales analysis, customer segmentation, software testing, marketing efforts and logistics planning„ "/>
               </Grid>
         </Grid>
         <Grid container spacing={3} className={classes.root}>
               <Grid className={classes.uxui} item xs={8} xs container >
                     <ListItemText primary="UX/UI Designer" secondary=" ”UX/UI designer needs to stay on top of the latest design trends. Design digital marketing and branding services by understanding the business demands and customer interests. Giving businesses a competitive edge simplifying people's life - by introducing new and simpler ways of doing things with smarter ideas and techniques„ "/>
               </Grid>
             <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={client} />
                </ButtonBase>
             </Grid>
        </Grid>
    </Container> 
    </div>
  );
}
