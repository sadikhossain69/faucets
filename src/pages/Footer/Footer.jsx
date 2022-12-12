const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <div style={{ height: "70px", }} className="d-flex align-items-center">
            <div className="mx-auto fw-bold fs-6">
            © copyright {date} - All Right Reserved by Sadik
            </div>
        </div>
    );
};

export default Footer;