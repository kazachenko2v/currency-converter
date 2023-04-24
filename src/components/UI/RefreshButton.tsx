import React from "react";
import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const RefreshButton: React.FC<{ forceUpdate: () => void }> = ({
  forceUpdate,
}) => {
  return (
    <Button
      sx={{ mt: 2 }}
      variant="outlined"
      size="small"
      onClick={forceUpdate}
    >
      <RefreshIcon fontSize="small" />
      <span>Update Currencies</span>
    </Button>
  );
};

export default RefreshButton;
