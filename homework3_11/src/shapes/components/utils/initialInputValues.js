export const initialValues = {
    id: 0,
    name: '',
    type: "",
    position: '',
    rotation: '',
    scale: '',
    color: '',
    wireframe: false,
    visible: false,
  };

export const initialState = {
    list: [
      {
        id: 1,
        name: 'Shape1',
        type: "BOX",
        position: '2,3,4',
        rotation: '1,3,5',
        scale: '2,3,4',
        color: '#778888',
        wireframe: true,
        visible: false,
      },
      {
        id: 2,
        name: 'Shape2',
        type: "SPHERE",
        position: '2,4,5',
        rotation: '5,3,1',
        scale: '1,4,1',
        color: '#FF0000',
        wireframe: false,
        visible: true,
      }
    ],
  selectedItem: null,
};