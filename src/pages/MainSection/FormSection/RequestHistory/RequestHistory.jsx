import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ethData, testLinkData } from "../../../../data/data";
import "./RequestHistory.css"
import Tables from "./Table/Tables";

const RequestHistory = () => {

    const [eth, setEth] = useState(true)
    const [testLink, setTestLink] = useState(false)

    const handleEth = () => {
        setEth(true)
        setTestLink(false)
    }
    const handleTestLink = () => {
        setEth(false)
        setTestLink(true)
    }

    return (
        <div>
            <div className="fw-bold">Request History</div>
            <div className="">
                <Button onClick={handleEth} size={`sm me-2 my-2 ${!eth ? "bg-white text-black" : ""}`}>ETH Transaction History</Button>
                <Button onClick={handleTestLink} size={`sm ${!testLink ? "bg-white text-black" : ""}`}>TestLink Transaction History</Button>
            </div>

            {/* Table  */}

            <div className="mt-2">
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

                        {
                            eth && ethData.map((data, index) => <Tables key={index} tableData={data} />)
                        }
                        {
                            testLink && testLinkData.map((data, index) => <Tables key={index} tableData={data} />)
                        }
                    </tbody>

                </Table>

            </div>
        </div>
    );
};

export default RequestHistory;