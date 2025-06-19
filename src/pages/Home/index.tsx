import {
  Rocket as RocketIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../../contexts";

export default function Home(): ReactElement {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const features = [
    {
      icon: <RocketIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Fast Development",
      description:
        "Built with Vite and React for lightning-fast development experience.",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "High Performance",
      description:
        "Optimized for performance with modern React patterns and best practices.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Type Safe",
      description:
        "Full TypeScript support ensures type safety and better developer experience.",
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Welcome to React App
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          A modern React application built with TypeScript, Material-UI, and
          Vite. Currently using <strong>{theme}</strong> theme.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/dashboard")}
            sx={{ px: 4, py: 1.5 }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/about")}
            sx={{ px: 4, py: 1.5 }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Paper
        sx={{
          p: 4,
          textAlign: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to Start Building?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Join thousands of developers who trust our platform for their
          projects.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate("/login")}
        >
          Sign Up Now
        </Button>
      </Paper>
    </Container>
  );
}
