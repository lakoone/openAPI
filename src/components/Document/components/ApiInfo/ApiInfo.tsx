import React from "react";
import {useOpenApiContext} from "../../../../context/OpenApiContext";

function ApiInfo() {
    const {apiData} = useOpenApiContext();
    return (
        apiData&&
        <section className="ApiInfo">
            <h3>
                {apiData.info.title}
            </h3>
            <p>
                {apiData.info.description}
            </p>
            <p>
                {apiData.info.version}
            </p>
            <p>
                {apiData.info.termsOfService}
            </p>
        </section>
    );
}

export default ApiInfo;