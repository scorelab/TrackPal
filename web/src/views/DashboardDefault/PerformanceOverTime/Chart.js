import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}));

function Chart({
  className, data: dataProp, labels, ...rest
}) {
  const classes = useStyles();
  const theme = useTheme();

  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, fade(theme.palette.secondary.main, 0.2));
    gradient.addColorStop(0.9, 'rgba(255,255,255,0)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    return {
      datasets: [
        {
          data: dataProp,
          backgroundColor: gradient,
          borderColor: theme.palette.secondary.main,
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 3,
          pointRadius: 6,
          pointBackgroundColor: theme.palette.secondary.main
        }
      ],
      labels
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 7,
            callback: (value) => (value > 0 ? `${value}K` : value)
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.common.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        title: () => {},
        label: (tooltipItem) => {
          let label = `Income: ${tooltipItem.yLabel}`;

          if (tooltipItem.yLabel > 0) {
            label += 'K';
          }

          return label;
        }
      }
    }
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Line
        data={data}
        options={options}
        //
      />
    </div>
  );
}

Chart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired
};

export default Chart;
