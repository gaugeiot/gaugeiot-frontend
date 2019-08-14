import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const AccountCreatedModal = ({open, onClose, email}) =>{


  return (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText  id="alert-dialog-description">
            <span>You account was created!
            <br/>
            In order to login into your account you have to verify your email!
            A verification email will be send to {email}. Please verify your inbox or spam!</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary"> Close </Button>
        </DialogActions>
      </Dialog>

  );
};

export default AccountCreatedModal;