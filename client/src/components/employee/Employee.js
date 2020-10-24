import React from 'react'

function Employee({employee}) {
  let {
    LastName,
    FirstName,
    BirthDate,
    Address,
    PostalCode,
    Country,
    Email
  } = employee;

  return (
    <tr>
      <td>{LastName}</td>
      <td>{FirstName}</td>
      <td>{BirthDate}</td>
      <td>{Address}</td>
      <td>{PostalCode}</td>
      <td>{Country}</td>
      <td>{Email}</td>
    </tr>
  )
}

export default Employee