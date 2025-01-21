import React from "react";
import {ParameterType} from "../../../../../../shared/types/Parameters";
import Parameter from "./Parameter/Parameter";

interface PathsProps {
    parameters:Array<ParameterType>
}
function Parameters(props: PathsProps) {

    return (
        <section className="Parameters">
            {props.parameters.map(parameter => (
                <div key={parameter.$ref.description}>
                    <Parameter parameter={parameter} />
                </div>
            ))}

        </section>
    )

}

export default Parameters;