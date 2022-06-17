
export function ContactItem ({contact, onContactEdit, onContactDelete}) {
    return (
        <div className="contactContainer">
            <div>
                <div className="roundDiv"/>
            </div>
            <div className="contactItem">
                <div className="contactName">{contact.name} {contact.surname}</div>
                <div className="contactPhone">{contact.number}</div>
            </div>
            <div className="buttonsSection">
                <button onClick={() => onContactEdit(contact.id)}>✍️</button>
                <button onClick={() => onContactDelete(contact.id)}>🗑</button>
            </div>
        </div>
    );
}