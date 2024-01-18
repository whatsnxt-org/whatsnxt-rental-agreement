import { TextField } from "@mui/material"

export const Input = ({ label}:{label: string}) => {
    return <TextField
    color="primary"
    label={label}
    variant="standard"
    className="w-full"
    InputLabelProps={{
      sx: {
        "&.Mui-focused": {
          color: "gray",
          fontWeight: "bold"
        }
      }
    }}
    InputProps={{ disableUnderline: true , sx: {
      borderBottom: '2px solid lightgray',
      fontWeight: "bold"
    } }}
  />
}