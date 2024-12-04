import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]); // Initially empty

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        setContacts(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts(); // Call the fetch function
  }, []); // Run only once on mount

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList
          contacts={contacts} // Pass the fetched contacts
          setSelectedContactId={setSelectedContactId} // Pass the setter for contact ID
        />
      )}
    </>
  );
}
