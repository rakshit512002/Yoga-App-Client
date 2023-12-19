import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomCard = ({ enroll, date, desc, payStatus, payID , enrollID }) => {
    const handlePayment = async() => {
        console.log("Hey");

        try {
            const userToken = localStorage.getItem('token');
            const requestBody = { enrollID };
            const response = await fetch('https://yoga-app-server.onrender.com/api/user/enroll/payLater', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`, // Include the user token in the headers
                },
                body: JSON.stringify(requestBody), // Send the request body
            });
            if (response.ok) {
                const data = await response.json();
                // setEnrollments(data.res); // Assuming the response has a property 'res' containing the enrollments
                // Reload the page after a successful payment
                window.location.reload();
            } else {
                console.error('Failed to fetch enrollments:', response.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error.message);
        }
    };

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {enroll} - {date}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Enrolled
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    {payStatus ? <Button size="small">Paid</Button> : <Button size="small" onClick={handlePayment}>Pay</Button>}
                    {payID !==0 ? payID: null}
                </CardActions>
            </Card>
        </Box>
    )
}

export default CustomCard