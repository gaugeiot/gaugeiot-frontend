import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const VerificationEmailModal = ({open, onClose, email}) =>{
  const [sendVerificationEmail, setSendVerificationEmail] = useState(false);

  const sendVerificationEmailHandle = () => {
    setSendVerificationEmail(true);
    // send email here
    // TODO: Remove log
    console.log('call the api to send a verification email to the user!');
    // TODO: Redirect to login
  }

  return (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText  id="alert-dialog-description">
            {
              sendVerificationEmail? <span>A verification email was sent to <b>{email}</b> !</span>
              : <span>This email is already associated with an account.<br/>
                In order to login into you account you have to verify you email!</span>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={sendVerificationEmail? onClose : sendVerificationEmailHandle} color="primary">
            {sendVerificationEmail?"Close":"Send Verification Email"}
          </Button>
        </DialogActions>
      </Dialog>

  );
};

export default VerificationEmailModal;