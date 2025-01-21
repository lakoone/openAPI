import React from "react";
import './Document.css'
import ApiInfo from "./components/ApiInfo/ApiInfo";
import Tags from "./components/Tags/Tags";
function Document() {
    return (
        <div className="Document">
            <ApiInfo />
            <Tags/>
        </div>
    );
}
export default Document;