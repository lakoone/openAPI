import React from "react";
import {useOpenApiContext} from "../../../../context/OpenApiContext";
import Path from "./Path/Path";
interface PathsProps {
    tagName:string
}
function Paths(props: PathsProps) {
    const {apiData} = useOpenApiContext();
    const paths = apiData?.paths.filter(path=>path.tags.includes(props.tagName));
    return (
        <section className="Paths">
            <p>{props.tagName}</p>
            {paths && paths.map((path) =>
                (<div key={path.summary}>
                    <p>{path.summary}</p>
                    <Path path={path} />
                </div>)
            )}
        </section>
    )

}

export default Paths;