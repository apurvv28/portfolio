"use client"
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    year: '2018-2022',
    degree: 'B.S. Computer Science',
    school: 'Tech University',
    description: 'Graduated with honors. Specialized in web development and AI.'
  },
  {
    year: '2014-2018',
    degree: 'High School Diploma',
    school: 'Science Academy',
    description: 'Focus on mathematics and computer science.'
  }
];

export default function Education() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box id="education" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight="bold" mb={6}>
          Education
        </Typography>
        
        <Box sx={{ 
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '2px',
            bgcolor: 'primary.main',
            left: isMobile ? '16px' : '50%',
            transform: isMobile ? 'none' : 'translateX(-50%)'
          }
        }}>
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 && !isMobile ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box sx={{ 
                display: 'flex', 
                mb: 6,
                ml: isMobile ? 0 : index % 2 === 0 ? 0 : '50%',
                width: isMobile ? '100%' : '50%',
                pl: isMobile ? 4 : index % 2 === 0 ? 0 : 4,
                pr: isMobile ? 0 : index % 2 === 0 ? 4 : 0,
                position: 'relative'
              }}>
                <Box sx={{
                  position: 'absolute',
                  left: isMobile ? 0 : index % 2 === 0 ? 'calc(100% - 32px)' : '-32px',
                  top: 0,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <SchoolIcon sx={{ color: 'white' }} />
                </Box>
                
                <Box sx={{ 
                  bgcolor: 'background.paper', 
                  p: 3, 
                  borderRadius: 2,
                  boxShadow: 3,
                  width: '100%'
                }}>
                  <Typography variant="h6" color="primary.main" fontWeight="bold">
                    {item.year}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" mt={1}>
                    {item.degree}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" mt={1}>
                    {item.school}
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}