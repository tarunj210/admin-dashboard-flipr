import React from 'react';
import {ToastProvider, useToasts} from 'react-toast-notifications';
import Button from '@material-ui/core/Button';
const Toast = () => {
    const {addToast} = useToasts();
    return (
        <div>

            <Button  style={{border: 'none', width: '250px',height: '50px', marginLeft: '650px', marginTop: '75px', backgroundColor: 'green', fontWeight: '700', border: '5px solid green'}} onClick={() => addToast('Hello everyone , this is a notification for success', {
                appearance: 'success',
                placement: 'bottom-center',
                autoDismiss: true,
            })}> 
                Notification for success
            </Button>
            <Button  style={{width: '250px',height: '50px', marginLeft: '650px', marginTop: '75px', backgroundColor: 'red', fontWeight: '700', border: '5px solid red'}} onClick={() => addToast('Hello everyone , this is a notification for error', {
                appearance: 'error',
                placement: 'bottom-center',
                autoDismiss: true,
            })}> 
                Notification for danger
            </Button>
            <Button  style={{marginLeft: '650px',width: '250px',height: '50px',marginTop: '75px', backgroundColor: 'blue', fontWeight: '1000', border: '5px solid blue'}} onClick={() => addToast('Hello everyone , this is a notification for information', {
                appearance: 'info',
                placement: 'bottom-center',
                autoDismiss: true,
            })}> 
                Notification for info
            </Button>
            </div>
    )
}

const Notifications = () => {
    return (<ToastProvider>
        <Toast />
    </ToastProvider>
    )}

export default Notifications

