import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: any) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: '80vh',
      paddingTop: 50
    },
    form: {
      // maxWidth: 500,
      // [theme.breakpoints.down('sm')]: {
     
      // }
    },
    title: {
      marginTop: theme.spacing(3),
      textAlign: 'center',
    },
    sugestion: {
      marginTop: theme.spacing(2)
    },
    textField: {
      marginTop: theme.spacing(2)
    },
    LoginButton: {
      margin: theme.spacing(2, 0)
    }
  }));
  
export default useStyles;