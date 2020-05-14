import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Prism from 'prismjs';
import ReactMarkdown from 'react-markdown/with-html';
import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& h1': {
      ...theme.typography.h1,
      marginBottom: theme.spacing(1)
    },
    '& h2': {
      ...theme.typography.h2,
      marginBottom: theme.spacing(1)
    },
    '& h3': {
      ...theme.typography.h3,
      marginBottom: theme.spacing(1)
    },
    '& h4': {
      ...theme.typography.h4,
      marginBottom: theme.spacing(1)
    },
    '& h5': {
      ...theme.typography.h5,
      marginBottom: theme.spacing(1)
    },
    '& h6': {
      ...theme.typography.h6,
      marginBottom: theme.spacing(1)
    },
    '& p': {
      ...theme.typography.subtitle1,
      marginBottom: theme.spacing(2)
    },
    '& ul': {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    '& ol': {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    '& li': {
      ...theme.typography.subtitle1,
      marginBottom: theme.spacing(1)
    },
    '& hr': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      backgroundColor: colors.grey[300],
      border: 0,
      height: 1
    },
    '& a': {
      color: theme.palette.link,
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
}));

function Markdown({ className, ...rest }) {
  const classes = useStyles();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={clsx(classes.root, className)}>
      <ReactMarkdown {...rest} />
    </div>
  );
}

Markdown.propTypes = {
  className: PropTypes.string
};

export default Markdown;
