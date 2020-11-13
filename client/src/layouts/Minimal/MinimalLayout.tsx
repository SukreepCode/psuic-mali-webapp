import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Topbar from './components/Topbar';

const useStyles = makeStyles((theme: any) => ({
  root: {

  },
  content: {
    marginTop: 60,
  },
}));

const MinimalLayout = (props: any) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content} >{children}</main>
    </div>
  );
};

// MinimalLayout.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string
// };

export default MinimalLayout;
