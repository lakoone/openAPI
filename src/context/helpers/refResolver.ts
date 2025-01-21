
export function resolveRef(ref: string, components: any): any {
    const path = ref.replace("#/components/", "").split("/");
    let resolved = components;

    for (const segment of path) {
        resolved = resolved?.[segment];
        if (!resolved) {
            throw new Error(`Reference not found: ${ref}`);
        }
    }

    return resolved;
}

