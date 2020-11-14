import React from 'react';
import { Helmet } from "react-helmet";
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
  const { children, title } = props;

  const headTitle = title || "DM Project System";

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{headTitle}</title>
      </Helmet>

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
