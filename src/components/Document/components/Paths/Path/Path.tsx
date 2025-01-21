import React from "react";
import {PathType} from "../../../../../shared/types/Path";
import Parameters from "./Params/Parameters";
import parameters from "./Params/Parameters";
import * as path from "node:path";
import Responses from "./Responses/Responses";

interface PathsProps {
    path:PathType
}
function Path(props: PathsProps) {
    console.log(props.path)
    return (
        <section className="Path">
            <p>{props.path.path}</p>
            <p>{props.path.method}</p>
            <Parameters parameters={props.path.parameters}/>
            <Responses responses={props.path.responses}/>
    </section>
)

}

export default Path;