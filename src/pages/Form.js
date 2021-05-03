import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ToastProvider, useToasts } from 'react-toast-notifications';
const useStyles = makeStyles({
    text1: {
        color: '#a020f0',
        fontWeight: '700'

    },
    grid1: {
        padding: '10px'
    },
    button1: {
        backgroundColor: '#a020f0',
        color: 'white',
        fontWeight: '700',
        marginTop: '25px',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '320px',
    }
});

const Toast = () => {
    const classes = useStyles();
    const { addToast } = useToasts();
    return (
        <Button variant="contained" className={classes.button1} onClick={() => addToast('Profile edited successfully', {
            appearance: 'success',
            PlacementType: 'bottom-center',
            autoDismiss: true,
        })} >Save</Button>
    )
}
export default function Form() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="form">
                <Typography className={classes.text1} variant="h4" gutterBottom>
                    Edit Profile
                 </Typography>
                <Grid container spacing={3} className={classes.text1}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="hobby"
                            name="Hobby"
                            label="Enter your hobbies"
                            fullWidth
                            autoComplete="hobbies"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address"
                            name="address"
                            label="Address line"
                            fullWidth
                            autoComplete="address"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="country"
                        />
                    </Grid>
                    <ToastProvider><Toast /></ToastProvider>
                </Grid>
            </div>
        </React.Fragment>
    );
}
