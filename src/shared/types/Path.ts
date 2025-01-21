import {ParameterType} from "./Parameters";
import {ResponseType} from "./Responses";

export type PathType = {
    path: string;
    method: string;
    summary: string;
    tags: string[];
    parameters: Array<ParameterType>;
    responses: Array<ResponseType>
}