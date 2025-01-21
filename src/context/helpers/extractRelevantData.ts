import {PathType} from "../../shared/types/Path";
import {resolve} from "./resolver";

export function extractRelevantData(apiSpec: any) {
    const apiInfo = {
        title: apiSpec.info?.title || "No title available",
        version: apiSpec.info?.version || "No version specified",
        description: apiSpec.info?.description || "No description available",
        termsOfService: apiSpec.info?.termsOfService || null,
        contact: apiSpec.info?.contact || null,
        license: apiSpec.info?.license || null,
    };
    const tags:{name:string,description:string}[] = apiSpec.tags || [];
    const paths: Array<PathType> = [];
    const components = apiSpec.components || {};
    // Перебір шляхів
    for (const [path, methods] of Object.entries(apiSpec.paths || {})) {
        // Перебір методів (GET, POST тощо)
        for (const [method, operation] of Object.entries(methods)) {
            // Збираємо потрібні дані
            const summary = operation.summary || "No summary available";
            const tags = operation.tags || [];
            // Обробка параметрів
            const parameters = (operation.parameters || []).map((param: any) => {
                return resolve(param, components)
            });
            // Обробка відповідей
            const responses = Object.entries(operation.responses || {}).map(
                ([statusCode, response]: [string, any]) => {
                        const resolvedResponse = resolve(response,components);
                        return {
                            statusCode,
                            description: resolvedResponse.description || "No description",
                            content:resolvedResponse.content || {}
                        };
                }
            );
            paths.push({
                path,
                method,
                summary,
                tags,
                parameters,
                responses,
            });

        }
    }
    return {info:apiInfo,tags,paths};
}
