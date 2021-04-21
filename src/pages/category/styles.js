import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    categoryTitle: {
        borderTop: `1px solid ${theme.palette.divider}`,
        padding:   '20px 0',
    },
}));
