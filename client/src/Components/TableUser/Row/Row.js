import React from 'react'
import {  Table,Button,Icon } from 'semantic-ui-react';


const TableRow=({data={},sendSms})=>{
    const {sms_received,_id,last_detected,phone}= data;
  return(
      <Table.Row>
          <Table.Cell>{phone}</Table.Cell>
          <Table.Cell>{new Date(last_detected).toDateString()}</Table.Cell>
          <Table.Cell>{sms_received}</Table.Cell>
          <Table.Cell>
              <Button floated='right' icon labelPosition='left' primary size='small' onClick={()=>sendSms(_id)}>
                  <Icon name='phone' /> Send Sms
              </Button>
          </Table.Cell>
      </Table.Row>
  )
};

export default TableRow;