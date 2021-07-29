import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { LogOutUser } from './LogOutUser';
import { LogInButton } from './LogInButton';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors/userSelectors';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const MainBar = () => {
    const classes = useStyles();
    const user = useSelector(selectUser);
    const logInOrOutButton = user ? <LogOutUser /> : <LogInButton />;
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Zorrokid Movies
                    </Typography>
                    { logInOrOutButton }
                </Toolbar>
            </AppBar>
        </div>
    );
}