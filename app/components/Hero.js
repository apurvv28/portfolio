"use client";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #2c387e, #6a1b9a)"
            : "linear-gradient(135deg, #6e8efb, #a777e3)",
        pt: 8,
        color: "white",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                width: isMobile ? 200 : 250,
                height: isMobile ? 200 : 250,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid white",
                boxShadow: 3,
              }}
            >
              {/* Replace with your image */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "grey.300",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">Profile Image</Typography>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant={isMobile ? "h3" : "h2"} fontWeight="bold">
              John Doe
            </Typography>
            <Typography variant="h5" mt={1} mb={3}>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" maxWidth={600}>
              Passionate about creating innovative web solutions with modern
              technologies. Specializing in React, Node.js, and cloud
              architecture.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
