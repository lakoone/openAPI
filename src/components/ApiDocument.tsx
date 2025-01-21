import React from "react";
import {useOpenApiContext} from "../context/OpenApiContext";
import ApiInfo from "./Document/components/ApiInfo/ApiInfo";
import Tags from "./Document/components/Tags/Tags";

function ApiDocument(props: any) {
    const {apiData} = useOpenApiContext()
    console.log(apiData)
    return (
        apiData?<div>
             <ApiInfo/>
             <Tags/>
        </div>: null
    );
}
export default ApiDocument;