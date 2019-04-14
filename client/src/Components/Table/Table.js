import React from 'react'
import './Table.css';
import { Button, Icon, Table } from 'semantic-ui-react';
import TableHeader from './Header/Header';
import TableRow from './Row/Row';
const CustomTable = ({stores}) => {
    let row ;
    if(stores.length>0){
      row= stores.map(store=>{
            return  <TableRow key={store._id} data={store}/>
        })
    }
   return (
        <Table celled compact definition className='table'>
            <TableHeader/>
            <Table.Body>
                {row}
            </Table.Body>
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell colSpan='4'>
                        <Button floated='right' icon labelPosition='left' primary size='small'>
                            <Icon name='user'/> Add New Location
                        </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}

export default CustomTable;