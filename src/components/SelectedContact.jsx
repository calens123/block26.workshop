import React, { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null); // State for the selected contact

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data); // Set the fetched contact data
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    fetchContact(); // Call the fetch function
  }, [selectedContactId]); // Re-run if the selectedContactId changes

  // If no contact data yet, display loading message
  if (!contact) return <div>Loading Contact Details...</div>;

  return (
    <div>
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Website:</strong> {contact.website}
      </p>
      <p>
        <strong>Address:</strong>{" "}
        {`${contact.address.street}, ${contact.address.city}`}
      </p>
      <p>
        <strong>Company:</strong> {contact.company.name}
      </p>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
    </div>
  );
}
