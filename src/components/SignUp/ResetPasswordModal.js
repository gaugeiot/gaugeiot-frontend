import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const ResetPasswordModal = ({open, onClose, email}) =>{
  const [sendResetPswdEmail, setSendResetPswdEmail] = useState(false);

  const sendResetPasswordEmail = () => {
    setSendResetPswdEmail(true);
    // send email here
    // TODO: Remove log
    console.log('call the api to send a reset password email to the user!');
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
              sendResetPswdEmail? <span>An email to reset your password was sent to <b>{email}</b> !</span>
              : <span>This email is already associated with an active account.<br/>
                If you don't remember you password, please click in the button bellow!</span>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={sendResetPswdEmail? onClose : sendResetPasswordEmail} color="primary">
            {sendResetPswdEmail?"Close":"Reset Password"}
          </Button>
          {/* <Button onClick={handleCloseModal} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>

  );
};

export default ResetPasswordModal;