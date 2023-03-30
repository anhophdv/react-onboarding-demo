import { Alert, Box } from "@mui/material";

const AppAlert = ({ msg }: Props) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Alert severity="error">{msg}</Alert>
    </Box>
  );
};

interface Props {
  msg: string;
}
export default AppAlert;
