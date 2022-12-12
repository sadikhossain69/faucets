import "./FormSection.css"
import RequestHistory from "./RequestHistory/RequestHistory";

const FormSection = () => {
    return (
        <div style={{ backgroundColor: "#FFFFFF", padding: "15px" }}>
            <RequestHistory />
        </div>
    );
};

export default FormSection;