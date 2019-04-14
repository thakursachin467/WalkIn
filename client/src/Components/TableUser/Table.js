import React from 'react'
import './Table.css';
import { Table } from 'semantic-ui-react';
import TableHeader from './Header/Header';
import TableRow from './Row/Row';
const CustomTable = ({data,sendSms}) => {
    let row ;
    if(data.length>0){
      row= data.map(data=>{
            return  <TableRow key={data._id} data={data} sendSms={sendSms}/>
        })
    }
   return (
        <Table celled compact definition className='table'>
            <TableHeader/>
            <Table.Body>
                {row}
            </Table.Body>
        </Table>
    );
}

export default CustomTable;