import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  List,
  Button,
  Divider
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'src/utils/axios';
import GenericMoreButton from 'src/components/GenericMoreButton';
import TaskItem from './TaskItem';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 400
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function TeamTasks({ className, google, ...rest }) {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchTasks = () => {
      axios.get('/api/tasks').then((response) => {
        if (mounted) {
          setTasks(response.data.tasks);
        }
      });
    };

    fetchTasks();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Map"
      />
      <Divider />
      <CardContent className={classes.content}>
        <Map google={google} style={{height: '500px', width: '726px'}} />
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          component={RouterLink}
          size="small"
          to="/kanban-board"
          variant="text"
        >
          See all
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}

TeamTasks.propTypes = {
  className: PropTypes.string
};


export default GoogleApiWrapper({
  api: (process.env.GOOGLE_API_KEY_GOES_HERE)
})(TeamTasks)