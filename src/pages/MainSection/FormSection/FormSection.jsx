import "./FormSection.css"
import RequestHistory from "./RequestHistory/RequestHistory";
import SendRequest from "./SendRequest/SendRequest";

const FormSection = () => {
    return (
        <div style={{ backgroundColor: "#FFFFFF", padding: "15px" }}>
            <SendRequest />
            <RequestHistory />
        </div>
    );
};

export default FormSection;