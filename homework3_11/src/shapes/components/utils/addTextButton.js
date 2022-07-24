import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const addTextButton = (name, label, value, handleChange, handleBlur, error, text) => {
    return (
        <FormControl>
            <TextField
                fullWidth
                type="text"
                name={name}
                label={label}
                variant={"standard"}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                error={error}
                helperText={text}
                required
            />
        </FormControl>
    );
}