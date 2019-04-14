import React from 'react'
import {  Table } from 'semantic-ui-react';

const TableHeader =(props)=>{
return(
    <Table.Header fullWidth>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Number of Subscribers</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
    </Table.Header>
)
};

export  default TableHeader;