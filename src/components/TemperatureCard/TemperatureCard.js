import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import WifiOnIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import TrendingDown from '@material-ui/icons/TrendingDown';
import TrendingUp from '@material-ui/icons/TrendingUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    maxWidth: 345,
    margin: '0.5rem',
    alignItems: 'flex-start'
  },
  header: {
    padding: 0
  },
  content: {
    textAlign: 'center'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const TemperatureCard = ({
  name,
  conn,
  temp,
  mintemp,
  maxtemp,
  unit,
  onSave,
  ...others
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [cardName, setCardName] = useState(name);

  useEffect(() => {
    setCardName(name);
  }, [name]);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} {...others}>
      <CardHeader
        className={classes.header}
        avatar={
          <IconButton aria-label='settings'>
            {conn ? (
              <WifiOnIcon color='primary' />
            ) : (
              <WifiOffIcon color='secondary' />
            )}
          </IconButton>
        }
        title={name}
      />

      <CardContent className={classes.content}>
        <Typography variant='h3' color='textSecondary' component='p'>
          {temp}&deg;{unit}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip
          color='primary'
          avatar={
            <Avatar>
              <TrendingDown />
            </Avatar>
          }
          label={
            <span>
              {mintemp}&deg;{unit}
            </span>
          }
          className={classes.chip}
        />
        <Chip
          color='secondary'
          avatar={
            <Avatar>
              <TrendingUp />
            </Avatar>
          }
          label={
            <span>
              {maxtemp}&deg;{unit}
            </span>
          }
          className={classes.chip}
        />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <TextField
            id='standard-name'
            label='Name'
            fullWidth
            value={cardName}
            onChange={e => {
              setCardName(e.target.value);
            }}
            margin='normal'
          />
          <Button
            variant='contained'
            size='small'
            fullWidth
            onClick={() => {
              if (cardName === '') {
                setCardName(name);
              } else {
                onSave(cardName);
              }
            }}
          >
            Save
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default TemperatureCard;
