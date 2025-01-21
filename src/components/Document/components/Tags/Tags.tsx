import {useOpenApiContext} from "../../../../context/OpenApiContext";
import React from "react";
import Paths from "../Paths/Paths";

function Tags() {
    const {apiData, loading} = useOpenApiContext()
    return (
        <div>
            {
                apiData && apiData.tags.map(tag=>
                    <Paths tagName={tag.name} key={tag.name}/>)
            }
        </div>
    );
}
export default Tags;