import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import bgImg from '../../../assets/img/bg-profile-main.jpg'
import CustomButton from '../../Button/CustomButton';
import EnrollModal from '../EnrollModal/EnrollModal';
const Banner = () => {
    const [enroolBtnStatus, setEnroolBtnStatus] = useState(false)
    const handleEnrollBtnStatus = () => {
        setEnroolBtnStatus(!enroolBtnStatus)
    }
    return (
        <>
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url("https://images.app.goo.gl/SAsu21rxQVioB81H7")`
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={12}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                            }}
                        >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Hey, UserName
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                You are just one step away from starting your yoga journey
                            </Typography>
                            <EnrollModal />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Banner