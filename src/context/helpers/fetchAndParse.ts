import {extractRelevantData} from "./extractRelevantData";
import * as YAML from "js-yaml";
export async function fetchAndParse(yamlUrl:string) {
        // YAML текст
        const response = await fetch(yamlUrl);

        if (!response.ok) {
            throw new Error(`Error fetching YAML: ${response.status} ${response.statusText}`);
        }

        const yamlText = await response.text();

        // Парсимо за допомогою js-yaml
        const data = YAML.load(yamlText);
        // Витягуємо потрібні дані
        const relevantData = extractRelevantData(data);
        return relevantData;
}