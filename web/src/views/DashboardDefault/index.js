import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import LatestProjects from './LatestProjects';
import Busses from './Busses';
import RealTime from './RealTime';
import RoutesCreated from './RoutesCreated';
import Map from './Map';
import Trains from './Trains';
import SystemHealth from './SystemHealth';
import PerformanceOverTime from './PerformanceOverTime';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  grid: {
    marginTop: theme.spacing(2)
  }
}));

function DashboardDefault() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Default Dashboard"
    >
      <Container maxWidth={false}>
        <Header />
        <Grid
          container
          spacing={3}
          className={classes.grid}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <Trains />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <Busses />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <SystemHealth />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <RoutesCreated />
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
          >
            <RealTime />
          </Grid>
          <Grid
            item
            lg={9}
            xs={12}
          >
            <PerformanceOverTime />
          </Grid>
          <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
            <Map />
          </Grid>
          <Grid
            item
            lg={7}
            xl={8}
            xs={12}
          >
            <LatestProjects />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardDefault;
