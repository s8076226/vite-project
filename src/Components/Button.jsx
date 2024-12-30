import AddIcon from "@mui/icons-material/Add";
import { Button, Typography } from "@mui/material";
//import React from "react";

const Fab = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      sx={{
        borderRadius: "22px",
        padding: "12px 24px",
        textTransform: "none",
        fontSize: "15px",
        fontWeight: 500,
        letterSpacing: "0.46px",
        lineHeight: "26px",
      }}
    >
      <Typography
        variant="button"
        sx={{
          fontFamily: "Roboto, Helvetica",
          fontSize: "15px",
          fontWeight: 500,
          letterSpacing: "0.46px",
          lineHeight: "26px",
        }}
      >
        СОЗДАТЬ
      </Typography>
    </Button>
  );
};
export default Fab;