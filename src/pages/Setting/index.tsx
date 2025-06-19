import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { type ReactElement } from "react";

import LanguageSelector from "../../components/common/LanguageSelector";
import ThemeSelector from "../../components/common/ThemeSelector";

export default function Setting(): ReactElement {
  return (
    <Box p={2}>
      <Stack spacing={5}>
        <LanguageSelector />
        <ThemeSelector />
      </Stack>
    </Box>
  );
}
