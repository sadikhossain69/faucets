import { Button, Container, Dropdown, DropdownButton, NavbarBrand, Stack } from "react-bootstrap";
import "./Navbar.css"

const Navbar = () => {
    return (
        <Stack direction="horizontal" className="justify-content-between p-3" gap={3}>
            <div className="fs-3 fw-bold navTitle">Faucets</div>
            <div className="d-flex justify-content-center">
                <select className="bg-light border px-4 py-2">
                    <option defaultValue={"Ethereum Kovan"} >Ethereum Kovan</option>
                    <option >Arbitrum Rinkeby</option>
                    <option >BNB Chain Testnet</option>
                    <option >Ethereum Rinkeby</option>
                    <option >Fantom Testnet</option>
                    <option >Harmony Testnet</option>
                    <option >POA Network Sokol</option>
                    <option >Polygon Mumbai</option>
                    <option >Harmony Testnet</option>
                </select>
                <div className="bg-light px-4 py-2 fw-bold navTitle navbarBtn mx-3">Connect Wallet</div>
                <i className="fa-regular fa-user fontSize p-2"></i>
            </div>
        </Stack>

    );
};

export default Navbar;