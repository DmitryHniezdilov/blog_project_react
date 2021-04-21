import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    blogWrap: {
        backgroundColor: theme.palette.background.paper,
        borderTop:       `1px solid ${theme.palette.divider}`,
        paddingTop:      '20px',
    },
}));
