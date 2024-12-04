import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";

// Contact list component
export default function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  );
}
