import {useFormik} from "formik";
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { palette, buttonStyle, selectStyle, selectItem } from './utils/palette';
import {validator} from './utils/validator';
import {initialValues} from './utils/initialInputValues';
import MenuItem from '@mui/material/MenuItem';
import {addTextButton} from "./utils/addTextButton";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import {v4 as uuid} from "uuid";
import {useEffect} from 'react';

const theme = createTheme(palette);
const validationSchema = yup.object().shape(validator);
const getItem = (props) => !!(props.selectedItem && props.list && props.selectedItem !== -1) ? 
  props.list.find(item => item.id === props.selectedItem) : null;

export function InputForm(props) {
  const item = getItem(props);
  const formik = useFormik({ validationSchema, initialValues,
    onSubmit : (values) => {
      return props.onEditComplete && props.onEditComplete({...values, id : values.id !== 0 ? values.id : uuid()});
    }
  });
  const handleSelectChange = (event) => handleChange("type")(event);
  const {values, handleSubmit, handleChange, handleBlur, errors} = formik;

  useEffect(() => {
    if (item && item.id !== formik.values.id) {
      formik.setValues(item);
    } else if (!item) {
      formik.resetForm(initialValues);
    }
  }, [props.list, item, props.selectedItem]);
  return (
    <div className="inputForm">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Box padding={3}>
            <form onSubmit={handleSubmit}>
              <Typography component={'p'} variant={'h4'}>Shapes</Typography>
                {addTextButton("name", "Name", values.name, handleChange, handleBlur, !!errors.name, errors.name)}
                <FormControl variant="standard" sx={selectStyle}>
                <InputLabel id="select-label">Type</InputLabel>
                <Select
                  labelId="select-label"
                  id="select-standard"
                  value={values.type}
                  onChange={handleSelectChange}
                  label="Type"
                >
                  <MenuItem value="" sx={selectItem}><em>None</em></MenuItem>
                  <MenuItem value={"BOX"} sx={selectItem}>BOX</MenuItem>
                  <MenuItem value={"POLYGON"} sx={selectItem}>POLYGON</MenuItem>
                  <MenuItem value={"SPHERE"} sx={selectItem}>SPHERE</MenuItem>
                  <MenuItem value={"PLANE"} sx={selectItem}>PLANE</MenuItem>
                  <MenuItem value={"CYLINDER"} sx={selectItem}>CYLINDER</MenuItem>
                </Select>
                <FormHelperText>{!!errors && errors.type}</FormHelperText>
              </FormControl>   
              {addTextButton("position", "Position", values.position, handleChange, handleBlur, !!errors.position, errors.position)}
              {addTextButton("rotation", "Rotation", values.rotation, handleChange, handleBlur, !!errors.rotation, errors.rotation)}
              {addTextButton("scale", "Scale", values.scale, handleChange, handleBlur, !!errors.scale, errors.scale)}
              {addTextButton("color", "Color", values.color, handleChange, handleBlur, !!errors.color, errors.color)}                             
              <FormControlLabel control={<Checkbox name="wireframe" checked={values.wireframe} onChange={handleChange}/>} label="Wireframe" />
              <FormControlLabel control={<Checkbox name="visible" checked={values.visible} onChange={handleChange} />} label="Visible on Scene" />
              <Button sx={buttonStyle} variant="contained" type="submit">Save</Button>
            </form>
          </Box>
      </Container>
      </ThemeProvider>
    </div>
  );
}