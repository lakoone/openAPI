import React from "react";
import {ResponseType} from "../../../../../../../../shared/types/Responses";

interface PathsProps {
    response:ResponseType
}
function Response(props: PathsProps) {
    console.log(props.response)
    return (
        <div key={props.response.description} className="Response">
            <p>{props.response.description}</p>
            <p>{props.response.description}</p>
        </div>
    )

}

export default Response;