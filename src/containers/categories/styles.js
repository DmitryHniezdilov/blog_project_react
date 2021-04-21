import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        backgroundColor: theme.palette.background.paper,
        justifyContent:  'space-around',
        overflowX:       'auto',
    },
    toolbarLink: {
        padding:    theme.spacing(1),
        flexShrink: 0,
    },
}));
