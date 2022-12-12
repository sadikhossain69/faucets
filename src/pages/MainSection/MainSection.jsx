import FormSection from "./FormSection/FormSection";
import Request from "./Request/Request";

const MainSection = () => {
    return (
        <div style={{ backgroundColor: "#EEF2FE", padding: "30px" }}>
            <Request />
            <FormSection />
        </div>
    );
};

export default MainSection;