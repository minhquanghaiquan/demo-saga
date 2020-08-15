import { grey } from "@material-ui/core/colors";

const styles = theme => ({
     modal: {
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       position: 'absolute',
       width: 400,
       backgroundColor: 'white',
       outline: 'none',
     },
     header: {
      backgroundColor: 'blue',
       color: 'white',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
     title: {
        color: 'white',
       fontWeight: 700,
       textTransform: 'capitalize',
     },
     icon: {
       cursor: 'pointer',
       fontSize: 30,
     },
     content: {
      //  padding: theme.spacing(2),
     },
   });
   
   export default styles;