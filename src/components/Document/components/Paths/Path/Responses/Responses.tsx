import {PathType} from "../../../../../../shared/types/Path";
import Parameters from "../Params/Parameters";
import React from "react";
import {ResponseType} from "../../../../../../shared/types/Responses";
import Response from "./Response/Response/Response";

interface PathsProps {
    responses:ResponseType[]
}
function Responses(props: PathsProps) {

    return (
        <section className="Responses">
            {props.responses.map(response => (<Response response={response}/>))}
        </section>
    )

}

export default Responses;