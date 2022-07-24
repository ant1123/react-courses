import * as yup from 'yup';

export const validator = {
    name: yup.string().required("You need to specify name"),
    position: yup.string()
    .required("You need to specify position")
    .test("position", 'position should be in `x,y,z` format', (value) => {
      let regex = /^(-?(\d+\.?\d*), *-?(\d+\.?\d*), *-?(\d+\.?\d*))$/i;
      return regex.test(value);
        }
    ),
    rotation: yup.string()
    .required("You need to specify rotation")
    .test("rotation", 'rotation should be in `x,y,z` format', (value) => {
      let regex = /^(-?(\d+\.?\d*), *-?(\d+\.?\d*), *-?(\d+\.?\d*))$/i;
      return regex.test(value);
        }
    ),
    scale: yup.string()
    .required("You need to specify scale")
    .test("scale", 'scale should be in `x,y,z` format', (value) => {
      let regex = /^(-?(\d+\.?\d*), *(\d+\.?\d*), *(\d+\.?\d*))$/i;
      return regex.test(value);
        }
    ),
    color: yup.string()
      .required("You need to specify color")
      .test("color", 'Color should be in hex format without alpha', (value) => {
        let regex = /^#([A-F0-9]{3}|[A-F0-9]{6})$/i;
        return regex.test(value);
        }
    ),
    type: yup.string().required("You need to specify type")
    .test("type", 'You need to specify type', (value) => {
        return !!value && value.length > 0;
    }
    ),
};