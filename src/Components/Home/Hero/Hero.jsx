import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { CustomBox, Title } from './Styles/Styles';
import CustomButton from '../../Button/CustomButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F6F6F6', // Light background color
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333', // Dark text color
        padding: '2rem',
      }}
    >
      <Container>
        <CustomBox
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                mt: { xs: 3, md: 5 },
                mb: 5,
              }}
            >
              Welcome to Yoga Buddy
            </Typography>
            <Title variant="h1">
              Discover a life where you'll love to live.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: '18px', my: 4 }}
            >
              Yoga is a holistic practice that combines physical postures, breath control, and meditation to promote physical, mental, and spiritual well-being. Originating in ancient India, yoga has evolved into various styles, each emphasizing a unique approach to achieving balance and harmony.
            </Typography>
            <Link to="#section1">
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
            </Link>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;





// import React from 'react'
// import { Box, Typography } from '@mui/material'
// import { Container } from '@mui/system'
// import { CustomBox, Title } from './Styles/Styles'
// import CustomButton from '../../Button/CustomButton'
// import img1 from '../../../assets/img/pose2.png'
// import { Link } from 'react-router-dom'
// const Hero = () => {
//     return (
//         <Box sx={{ backgroundColor: "#F6F0FF", minHeight: "80vh" }}>
//             <Container>
//                 <CustomBox>
//                     <Box sx={{ flex: "1" }}>
//                         <Typography
//                             variant="body2"
//                             sx={{
//                                 fontSize: "18px",
//                                 color: "#687690",
//                                 fontWeight: "500",
//                                 mt: 5,
//                                 mb: 5,
//                             }}
//                         >
//                             Welcome to Yoga Buddy
//                         </Typography>
//                         <Title variant="h1">
//                             Discover a life where you'll love to live.
//                         </Title>
//                         <Typography
//                             variant="body2"
//                             sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
//                         >
//                             Yoga is a holistic practice that combines physical postures, breath control, and meditation to promote physical, mental, and spiritual well-being. Originating in ancient India, yoga has evolved into various styles, each emphasizing a unique approach to achieving balance and harmony.

//                         </Typography>
//                         <Link to="#section1">
//                         <CustomButton
//                             backgroundColor="#0F1B4C"
//                             color="#fff"
//                             buttonText="More About Us"
//                             heroBtn={true}
//                         />
//                         </Link>
//                     </Box>

//                     <Box sx={{ flex: "0.3" }}>
//                         {/* <img
//                             src={img1}
//                             alt="img1"
//                             style={{ maxWidth: "100%", marginBottom: "2rem" }}
//                         /> */}
//                     </Box>
//                 </CustomBox>
//             </Container>
//         </Box>
//     )
// }

// export default Hero