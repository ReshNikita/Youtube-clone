import { useNavigate } from "react-router-dom";

import { Button, Alert, Stack } from "@mui/material";

import { CONSTANTS } from "../constants";

const AlertError = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: "100%",
        zIndex: "100",
        justifyContent: "center",
      }}
      spacing={2}
      mt={20}
    >
      <Alert
        sx={{ display: "flex", justifyContent: "center" }}
        severity="error"
      >
        {CONSTANTS.ALERT_MESSAGE}
      </Alert>

      <Stack sx={{ alignItems: "center" }}>
        <Button
          color="error"
          variant="contained"
          sx={{ width: "50%" }}
          onClick={() => navigate("/Youtube-clone")}
        >
          {CONSTANTS.BACK}
        </Button>
      </Stack>
    </Stack>
  );
};
export default AlertError;
