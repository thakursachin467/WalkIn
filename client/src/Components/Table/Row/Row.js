import React from 'react'
import {  Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const TableRow=({data={}})=>{
    const {name,_id,location:{latitude,longitude}}= data;
  return(
      <Table.Row>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>Latitude: {latitude}  , Longitude: {longitude}</Table.Cell>
          <Table.Cell>
              <Link to={`/store/${_id}`}>See all Subscribers</Link>
          </Table.Cell>
      </Table.Row>
  )
};

export default TableRow;