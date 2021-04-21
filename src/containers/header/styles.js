import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom:                     `1px solid ${theme.palette.divider}`,
        backgroundColor:                  theme.palette.background.paper,
        [ theme.breakpoints.down('sm') ]: {
            flexFlow: 'wrap',
            padding:  '20px 0',
        },
    },
    toolbarTitle: {
        textAlign:                        'center',
        [ theme.breakpoints.down('sm') ]: {
            order: '-1',
        },
    },
}));
