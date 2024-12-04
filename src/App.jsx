import { useState } from "react";
import "./App.css";
import ContactList, { dummyContacts } from "./components/ContactList";

// Contact list component
export default function App() {
  // Set up the state for contacts, using dummyContacts as default value
  const [contacts, setContacts] = useState(dummyContacts);

  // Log to ensure it's working
  console.log("Contacts: ", contacts);

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  );
}
