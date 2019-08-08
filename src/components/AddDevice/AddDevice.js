import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Box  from '@material-ui/core/Box';
import Container  from '@material-ui/core/Container';
import Button  from '@material-ui/core/Button';

const AddDevice = props => {

  const submit = event => {
    event.preventDefault();
    console.log('Add device submited!');
    // onSubmit(email, password);
  }

  return (
    <Container maxWidth="md">
    <form onSubmit={submit}>
    
    <TextField
        id="standard-full-width"
        label="Device Name"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="standard-full-width"
        label="Device Location"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="standard-full-width"
        label="MAC Address"
        fullWidth
        margin="normal"
        placeholder="00:00:00:00:00:00"
        required
      />
      <FormControl fullWidth margin="normal" >
        <InputLabel shrink htmlFor="age-label-placeholder">
          Device Type
        </InputLabel>
        <Select
          value={10}
          // onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
        >
          <MenuItem value={10}>Temperature</MenuItem>
          <MenuItem value={20}>Switch</MenuItem>
          <MenuItem value={30}>Presence</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel shrink htmlFor="age-label-placeholder">
          Update Rate:
        </InputLabel>
        <Select
          value={10}
          // onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
        >
          <MenuItem value={10}>30s</MenuItem>
          <MenuItem value={20}>1min</MenuItem>
          <MenuItem value={30}>3min</MenuItem>
          <MenuItem value={30}>5min</MenuItem>
        </Select>
      </FormControl>
      <Button
            type="submit"
            variant='contained'
            size='medium'
            fullWidth
            style={{marginTop: 2 + 'em'}}
            // onClick={() => {
            //   if (cardName === '') {
            //     setCardName(name);
            //   } else {
            //     onSave(cardName);
            //   }
            // }}
      >
            Add New Device
      </Button>
      </form>
    </Container>
  );
};

AddDevice.propTypes = {};

export default AddDevice;
