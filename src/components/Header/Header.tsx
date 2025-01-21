import {useEffect, useState} from "react";
import React from "react";
import {useOpenApiContext} from "../../context/OpenApiContext";

export default function Header() {
    const [fileContent, setFileContent] = useState('');
    const {uploadUserFile} = useOpenApiContext()
    const handleFileRead = (file: any) => {
        const reader = new FileReader();

        reader.onload = (event: any) => {
            setFileContent(event.target.result);
        };

        reader.readAsText(file);

    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFileRead(file);
        }
    };

    useEffect(()=>{
        // const func = async ()=>{
        //     const config = await createConfig({});
        //     const res = await bundleFromString({ config, source:fileContent,dereference:true });
        //     console.log(res);
        // }
        // func()
    },[fileContent])
    return (
        <header className="App-header">
            <h3>
                Upload your OpenAPI file in YAML format
            </h3>
            <input type="file" accept=".yaml,.yml,.json" onChange={handleFileChange}/>
        </header>
    );
}
