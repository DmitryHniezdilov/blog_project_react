import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    loading: {
        backgroundColor: theme.palette.background.paper,
        display:         'none',
        position:        'fixed',
        zIndex:          9999,
        top:             0,
        left:            0,
        width:           '100%',
        height:          '100%',
        justifyContent:  'center',
        alignItems:      'center',
    },
}));
