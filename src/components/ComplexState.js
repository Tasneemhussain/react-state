import NameTag from "./NameTag";

const ComplexState = () => {
    return(
        <div
        style = {{
            display: "flex",
            justifycontent: "center",
            alignItems: "center",
            flexDirection: "column",
            }}
        >
            <h1>Complex state in React</h1>
            <NameTag firstName= "Tasneem" lastName="Hussain" />
           
        </div>
    );
};

export default ComplexState ;