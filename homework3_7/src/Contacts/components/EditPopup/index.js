import {useState} from 'react';
export function EditPopup ({editableContact, onEditComplete, onEditClose}) {
    const [name, setName ] = useState(editableContact.name);
    const [surname, setSurname ] = useState(editableContact.surname);
    const [number, setNumber ] = useState(editableContact.number);

    const onSave = () => {
        onEditComplete(
        {
            id: editableContact.id,
            name,
            surname,
            number
        });
    };

    const onChangeFieldsHandler = (field, value) => {
      switch (field) {
        case 'name' : {
            setName(value);
            break;
        }
        case 'surname' : {
            setSurname(value);
            break;
        }
        case 'number' : {
            setNumber(value);
            break;
        }
        default: {
            break;
        }
      }
    }

    return (
        <div className='editPopupContainer'>
            <div className='editContactPopup'>
                <div className="editPopupHeader">
                    <h2>Edit Contact: <b>{editableContact.name} {editableContact.surname}</b></h2>
                    <button onClick={() => onEditClose()}>X</button>
                </div>
                <div className="editPopupBody">
                    <div>
                        <div className="roundEditDiv"/>
                    </div>
                    <div className="editContactForm">
                        <div className="editContactField">
                            <label>First name:</label>
                            <input type="text" name="name" value={name} onChange={(event) => onChangeFieldsHandler('name', event.target.value)}></input>
                        </div>
                        <div className="editContactField">
                            <label>Last name:</label>
                            <input type="text" name="surname" value={surname} onChange={(event) => onChangeFieldsHandler('surname', event.target.value)}></input>
                        </div>
                        <div className="editContactField">
                            <label>Phone Number:</label>
                            <input type="text" name="number" value={number} onChange={(event) => onChangeFieldsHandler('number', event.target.value)}></input>
                        </div>                       
                        <div className="saveContact">
                            <button className="saveContactBtn" onClick={() => onSave()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}