import { AppSyncSimulatorPipelineResolverConfig, AppSyncSimulatorUnitResolverConfig, RESOLVER_KIND } from "amplify-appsync-simulator";

export const resolversConfig: (AppSyncSimulatorPipelineResolverConfig | AppSyncSimulatorUnitResolverConfig)[] = [
    {
        kind: RESOLVER_KIND.UNIT,
        typeName: "Query",
        fieldName: "allWalkInDrives",
        dataSourceName: "LambdaDataSource",
        requestMappingTemplateLocation: "lambdaRequestMappingTemplate.vtl",
        responseMappingTemplateLocation: "lambdaResponseMappingTemplate.vtl"
    },
    {
        kind: RESOLVER_KIND.UNIT,
        typeName: "Query",
        fieldName: "checkLogin",
        dataSourceName: "LambdaDataSource",
        requestMappingTemplateLocation: "lambdaRequestMappingTemplate.vtl",
        responseMappingTemplateLocation: "lambdaResponseMappingTemplate.vtl"
    },
    {
        kind: RESOLVER_KIND.UNIT,
        typeName: "Query",
        fieldName: "walkInDriveById",
        dataSourceName: "LambdaDataSource",
        requestMappingTemplateLocation: "lambdaRequestMappingTemplate.vtl",
        responseMappingTemplateLocation: "lambdaResponseMappingTemplate.vtl"
    },
    {
        kind: RESOLVER_KIND.UNIT,
        typeName: "Query",
        fieldName: "authentication",
        dataSourceName: "LambdaDataSource",
        requestMappingTemplateLocation: "lambdaRequestMappingTemplate.vtl",
        responseMappingTemplateLocation: "lambdaResponseMappingTemplate.vtl"
    },
    {
        kind: RESOLVER_KIND.UNIT,
        typeName: "Mutation",
        fieldName: "appliedDrive",
        dataSourceName: "LambdaDataSource",
        requestMappingTemplateLocation: "lambdaRequestMappingTemplate.vtl",
        responseMappingTemplateLocation: "lambdaResponseMappingTemplate.vtl"
    },
    {
        kind: RESOLVER_KIND.UNIT,
        typeName: "Mutation",
        fieldName: "createUser",
        dataSourceName: "LambdaDataSource",
        requestMappingTemplateLocation: "lambdaRequestMappingTemplate.vtl",
        responseMappingTemplateLocation: "lambdaResponseMappingTemplate.vtl"
    },

]