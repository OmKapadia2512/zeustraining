import { AppSyncSimulatorPipelineResolverConfig, AppSyncSimulatorUnitResolverConfig, RESOLVER_KIND } from "amplify-appsync-simulator";

export const resolversConfig: (AppSyncSimulatorPipelineResolverConfig | AppSyncSimulatorUnitResolverConfig)[] = [
    {
        kind: RESOLVER_KIND.UNIT,
        typeName: "Query",
        fieldName: "getAllWalkInDrives",
        dataSourceName: "LambdaDataSource",
        requestMappingTemplateLocation: "lambdaRequestMappingTemplate.vtl",
        responseMappingTemplateLocation: "lambdaResponseMappingTemplate.vtl"
    }
]