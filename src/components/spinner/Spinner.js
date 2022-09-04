import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
    return (
        <Box sx={{ marginTop: 20}}>
            <CircularProgress/>
        </Box>
    )
}

export default Spinner