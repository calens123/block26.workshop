import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

// ContactList component
export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  // useEffect to fetch data once the component mounts
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json(); // Parse the response as JSON
        setContacts(result); // Set the fetched data into the state
      } catch (error) {
        console.error("Error fetching contacts:", error); // Log errors if fetch fails
      }
    }

    fetchContacts(); // Call the async function to fetch the data
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Log contacts state to verify data
  console.log("Contacts:", contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over contacts and render each contact */}
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
}
