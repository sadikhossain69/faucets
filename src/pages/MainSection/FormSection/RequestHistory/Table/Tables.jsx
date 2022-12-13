import React from 'react';
import { Table } from 'react-bootstrap';

const Tables = ({ tableData }) => {
    return (

        <>
            <tr>
                <td>{tableData.id}</td>
                <td>{tableData.time}</td>
                <td>{tableData.amount}</td>
                <td>{tableData.hash}</td>
            </tr>
        </>
    );
};

export default Tables;