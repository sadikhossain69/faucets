import React from 'react';
import { Table } from 'react-bootstrap';

const Tables = () => {
    return (
            <Table striped bordered hover responsive size='sm' className='w-50'>
                <thead>
                    <tr>
                        <th className='fw-bold'>Sr</th>
                        <th className='fw-bold'>Time</th>
                        <th className='fw-bold'>Amount</th>
                        <th className='fw-bold'>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
    );
};

export default Tables;