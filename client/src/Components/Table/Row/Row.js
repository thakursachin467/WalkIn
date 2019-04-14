import React from 'react'
import {  Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
const storeId=12
const TableRow=(props)=>{
  return(
      <Table.Row>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>
              <Link to={`/store/${storeId}`}>See all Subscribers</Link>
          </Table.Cell>
      </Table.Row>
  )
};

export default TableRow;