import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth:      600,
        marginTop:     theme.spacing(8),
        marginLeft:    'auto',
        marginRight:   'auto',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
    },
    avatar: {
        margin:          theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width:     '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        marginTop: theme.spacing(2),
    },
}));
