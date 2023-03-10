import {useState, useEffect} from 'react';
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import css from 'components/App.module.css'

const  App = () => {
  const [contacts, setContacts] = useState (
    () =>  
      JSON.parse(localStorage.getItem('contacts')) ?? []
    
  );

  const [filter, setFilter] = useState ('');

  const addContact = newContact => {
        if (
          contacts.some(
            contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
          )
        ) {
          alert(newContact.name + ' is already in contacts');
        }  else {
          setContacts(prevContacts => [newContact, ...prevContacts]);
        } ;
      } ;
  

      const filterHendler = e => {
        setFilter(e.target.value);
      };

      const deleteItem = id => {
        setContacts(prevState => 
          prevState.filter(contact => contact.id !== id)
        )
      };

      const showFilteredContacts = () => {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
         );
      };

      useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }, [contacts]);

      return (
        <div
          style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: '#dff1ff'}}
        >
          <h1 className={css.phonebook}>Phonebook</h1>

          <ContactForm onSubmit={addContact} />
            {contacts.length === 0 ? (
            <p>there are no contacts</p>
            ) : (
          <>

          <h2 className={css.contacts}>Contacts</h2>

          <Filter onInputHendler={filterHendler}></Filter>
          <ContactList
            deleteItem={deleteItem}
            filteredContacts={showFilteredContacts()}
          ></ContactList>
          </>
            )}
        </div>
      );
    };

export default App;

// class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContact = newContact => {
//     if (
//       this.state.contacts.some(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(newContact.name + ' is already in contacts');
//     } else {
//       this.setState(prevState => ({
//         contacts: [newContact, ...prevState.contacts],
//       }));
//     }
//   };

//   filterHendler = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   deleteItem = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   showFilteredContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-start',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//           backgroundColor: '#dff1ff'
//         }}
//       >
//         <h1 className={css.phonebook}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         {this.state.contacts.length === 0 ? (
//           <p>there are no contacts</p>
//         ) : (
//           <>
//             <h2 className={css.contacts}>Contacts</h2>
//             <Filter onInputHendler={this.filterHendler}></Filter>
//             <ContactList
//               deleteItem={this.deleteItem}
//               filteredContacts={this.showFilteredContacts()}
//             ></ContactList>
//           </>
//         )}
//       </div>
//     );
//   }
// }
// export default App;