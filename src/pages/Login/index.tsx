import {
  Google as GoogleIcon,
  Microsoft as MicrosoftIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { type ReactElement } from "react";

import { useLanguage } from "../../contexts";
import { useAuth } from "../../contexts/AuthContext";

export default function Login(): ReactElement {
  const { t } = useLanguage();
  const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await login("google");
    } catch {
      alert("Google login failed. Please try again.");
    }
  };

  const handleMicrosoftLogin = async () => {
    try {
      await login("microsoft");
    } catch {
      alert("Microsoft login failed. Please try again.");
    }
  };

  return (
    <Box width="100%" height="100%">
      <Container
        maxWidth="sm"
        sx={{
          py: 8,
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <Card elevation={4} sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 600, color: "primary.main" }}
              >
                {t.auth.login}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t.auth.welcomeBack} {t.auth.signInToAccount}
              </Typography>
            </Box>

            {/* Social Login Buttons */}
            <Stack spacing={3}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                sx={{
                  py: 2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              >
                {t.auth.continueWithGoogle}
              </Button>

              <Button
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<MicrosoftIcon />}
                onClick={handleMicrosoftLogin}
                sx={{
                  py: 2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              >
                {t.auth.continueWithMicrosoft}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
