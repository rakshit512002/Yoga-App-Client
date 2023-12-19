import React from 'react'
import { Box, Typography } from "@mui/material";
import { CustomBox } from '../../Home/Guide/Styles/Styles';
import Card from './CustomCard'
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { useEffect } from 'react';

const   Enrollments = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userToken = localStorage.getItem('token');
                const response = await fetch('https://yoga-app-server.onrender.com/api/user/enroll/getAll', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userToken}`, // Include the user token in the headers
                    },
                    // body: JSON.stringify(requestBody),
                });
                if (response.ok) {
                    const data = await response.json();
                    setEnrollments(data.res); // Assuming the response has a property 'res' containing the enrollments
                } else {
                    console.error('Failed to fetch enrollments:', response.statusText);
                }
            } catch (error) {
                console.error('Error during fetch:', error.message);
            }
        };

        fetchData();
        console.log("i am here");
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                }}
            >
                <div
                    style={{
                        width: "5%",
                        height: "5px",
                        backgroundColor: "#000339",
                        margin: "0 auto",
                    }}
                ></div>

                <Typography
                    variant="h3"
                    sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
                >
                    Enrollments
                </Typography>

                <CustomBox>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "#5A6473",
                            textAlign: "center",
                        }}
                    >
                        Your current and past enrollments
                    </Typography>
                </CustomBox>
            </Box>
            <Box sx={{
                flexGrow: 1,
                marginLeft: '1rem',
                marginRight: '1rem'
            }}>
                <Grid container spacing={2}>
                    {enrollments.map((enrollment , idx) => {
                        return (<Grid key={idx} md={3}>
                            <Card
                                // enroll={enrollment.month}
                                date={enrollment.enrollDate} // Assuming you have a function to format the date
                                desc={enrollment.batch}
                                payStatus={enrollment.paymentStatus ? 1 : 0}
                                payID={enrollment.paymentID}
                                enrollID={enrollment.id}
                            />
                        </Grid>)

                        })}
                </Grid>
            </Box>

        </>
    )
}

export default Enrollments