import {ParameterType} from "../../../../../../../shared/types/Parameters";
import React from "react";

interface PathsProps {
    parameter:ParameterType
}
function Parameter(props: PathsProps) {

    return (
        <section className="Parameter">
            <p>{props.parameter.$ref.name}</p>
            <p>{props.parameter.$ref.description}</p>
        </section>
    )

}

export default Parameter;