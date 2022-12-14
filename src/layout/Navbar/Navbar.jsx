import { Button, Container, Dropdown, DropdownButton, NavbarBrand, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Navbar.css"

const Navbar = () => {


    const handleModal = () => {
        Swal.fire({
            title: '<strong>Connect your wallet</strong>',
            html:
                '<img src="https://faucets.netlify.app/static/media/MetaMask.551edf10.svg" /> ',
            showCloseButton: true,
        })
    }
  
    return (
        <div>
            <div className="nav-container" gap={3}>
                <div className="fs-3 fw-bold navTitle">Faucets</div>
                <div className="d-flex option-nav">
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
                    <div onClick={handleModal} className="bg-light px-4 py-2 fw-bold navTitle navbarBtn mx-3">Connect Wallet</div>
                    <Link to={'/login'}><i className="fa-regular fa-user fontSize p-2"></i></Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;