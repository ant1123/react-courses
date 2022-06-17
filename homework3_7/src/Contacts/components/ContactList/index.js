import {ContactItem} from '../ContactItem';
export function ContactList ({contacts, onContactEdit, onContactDelete}) {
    return (
        <div className="contactList">
           {contacts.map(contact => 
                <ContactItem 
                    contact={contact} 
                    key={contact.id}
                    onContactEdit={onContactEdit}
                    onContactDelete={onContactDelete}
                />
           )}
        </div>
    );
}