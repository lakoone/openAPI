export type ResponseType = {
    statusCode:string
    description: string;
    content: {
        [mediaType: string]: {
            examples:{
                default_example: {
                    $ref?: Record<string, any>
                }
            }
            schema: {
                $ref?: Record<string, any> // Посилання на компонент
            };
        };
    };
}
