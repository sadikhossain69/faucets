import { useState } from "react";
import { Button } from "react-bootstrap";
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
            <div className="mt-2">
                <Tables />
            </div>
        </div>
    );
};

export default RequestHistory;