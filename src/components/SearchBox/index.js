import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import styles from './styles';



const SearchBox = (props) => {
     const { classes, handleChange } = props;
     return (
          <form className={classes.container}>
               <TextField 
                    className={classes.textField}
                    autoComplete="off"
                    id="standard-search" 
                    label="Search field" 
                    type="search" 
                    onChange={handleChange}

               />
          </form>
     );
};




export default withStyles(styles)(SearchBox);
