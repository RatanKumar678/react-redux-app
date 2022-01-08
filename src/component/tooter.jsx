import React, {useState,useEffect} from 'react';
import { Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Tooter = ({openToster}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(openToster === true) {
            setOpen(true);
        }
    }, [openToster]);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <>
           <Snackbar open={open} autoHideDuration={6000} onClose={()=>{setOpen(false)}}>
                <Alert onClose={()=>{setOpen(false)}} severity="success" sx={{ width: '100%' }}>
                    Product added to cart !
                </Alert>
            </Snackbar> 
        </>
    );
}

export default Tooter;
