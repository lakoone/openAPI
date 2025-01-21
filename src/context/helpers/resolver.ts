import {resolveRef} from "./refResolver";

export function resolve(object: any, components: any): any {
    // Якщо це рядок і він починається з "#/"
    if (typeof object === "string" && object.startsWith("#/")) {
        return resolveRef(object, components);
    }

    // Якщо це масив, рекурсивно обробляємо кожен елемент
    if (Array.isArray(object)) {
        return object.map((item) => resolve(item, components));
    }

    // Якщо це об'єкт, рекурсивно обробляємо кожне поле
    if (object && typeof object === "object") {
        const resolvedObject: any = {};
        for (const [key, value] of Object.entries(object)) {
            resolvedObject[key] = resolve(value, components);
        }
        return resolvedObject;
    }

    // Якщо це не рядок, масив чи об'єкт, повертаємо без змін
    return object;
}
