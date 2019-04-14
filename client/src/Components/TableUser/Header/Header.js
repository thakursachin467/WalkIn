import React from 'react'
import {  Table } from 'semantic-ui-react';

const TableHeader =(props)=>{
return(
    <Table.Header fullWidth>
        <Table.Row>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Last Detected</Table.HeaderCell>
            <Table.HeaderCell>Number of SMS received</Table.HeaderCell>
            <Table.HeaderCell>Send SMS</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
)
};

export  default TableHeader;