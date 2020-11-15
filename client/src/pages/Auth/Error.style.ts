import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  },
  heading: {
    marginBottom: 12,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 1.5
  }
}));

export default useStyles;