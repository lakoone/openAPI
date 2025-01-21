export type ParameterType = {
    $ref:{
        name: string;
        in:string
        required: boolean;
        type: string;
        description: string;
        schema: Record<string, any>;
    }
}