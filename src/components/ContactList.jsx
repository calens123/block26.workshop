// Contact list

import React from "react";

// Dummy data to simulate contacts
export const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ contacts }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contacts.id}>
            <td>{contacts.name}</td>
            <td>{contacts.email}</td>
            <td>Phone</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
