import Head from "next/head";
import { Box, Button, Stack, ThemeProvider, Container } from "@mui/material";
import theme from "@/themes";
import { SignupForm } from "@/components/SignupForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{
            mt: 2,
            px: 3,
          }}
        >
          <Button sx={{ flex: 1 }} variant="contained">
            Hello word
          </Button>
          <Button sx={{ flex: 1 }} variant="outlined">
            Hello word
          </Button>
          <Button sx={{ flex: 1 }} variant="contained" color="secondary">
            Hello word
          </Button>
        </Stack>
        <Stack
          spacing={1}
          sx={{
            mt: 2,
            px: 2,
          }}
        >
          <Box>
            <Button sx={{ flex: 1 }} variant="contained">
              Hello word
            </Button>
          </Box>
          <Box>
            <Button sx={{ flex: 1 }} variant="outlined">
              Hello word
            </Button>
          </Box>
          <Box>
            <Button sx={{ flex: 1 }} variant="contained" color="secondary">
              Hello word!!!!
            </Button>
          </Box>
        </Stack>

        <Container
          sx={{
            mt: 2,
            px: 2,
          }}
        >
          <SignupForm />
        </Container>
      </ThemeProvider>
    </>
  );
}
