import React from "react";

// ContactRow component renders a single table row with name, email, and phone
export default function ContactRow({ contact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
