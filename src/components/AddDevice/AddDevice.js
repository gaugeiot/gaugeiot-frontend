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
  return (
    <Container maxWidth="md">
    <TextField
        id="standard-full-width"
        label="Device Name"
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="Device Location"
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-full-width"
        label="MAC Address"
        fullWidth
        margin="normal"
        placeholder="0000-0000-0000-0000"
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
    </Container>
  );
};

AddDevice.propTypes = {};

export default AddDevice;
