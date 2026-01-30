import { ReactNode } from "react";
import { Container, Box } from "@mui/material";

export default function BaseBanner({ image, imageFirst = true, children }: { image: string; imageFirst?: boolean; children: ReactNode}) {
  return (
    <Container
      disableGutters
      sx={(theme) => ({
        display: "flex",
        flexDirection: `${imageFirst ? "row" : "row-reverse"}`,
        alignItems: "center",
        gap: 6,
        py: "80px",
        [theme.breakpoints.down("sm")]: {
          flexDirection: `${imageFirst ? "column" : "column-reverse"}`,
          py: "60px",

          }
        })}>
      <Box sx={{ borderRadius: '8px' }}>
        <img src={image} alt="Banner Visual" className="h-full max-w-full rounded-lg" />
      </Box>
      <Box>
        {children}
      </Box>
    </Container>
  )
}
