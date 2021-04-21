import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    pageLayout: {
        backgroundColor: theme.palette.background.paper,
        display:         'flex',
        flexDirection:   'column',
        minHeight:       '100vh',
    },
    container: {
        flexGrow: '1',
    },
    footer: {
        flexShrink: '0',
    },
}));
