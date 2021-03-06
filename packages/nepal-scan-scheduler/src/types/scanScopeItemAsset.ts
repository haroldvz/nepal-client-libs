import { AlScanScopeItem } from './scanScopeItem';

export interface AlScanScopeItemAsset extends AlScanScopeItem {
    /**
     * Specifies the type of the asset added to the scan scope.
     * Following asset types are supported:
     * - `deployment`
     * - `region`
     * - `network`
     * - `vpc` (alias of the `network` type)
     * - `subnet`
     * - `host`
     */
    asset_type?: AlScanScopeItemAsset.AssetTypeEnum;
    key: string;
    type: AlScanScopeItemAsset.TypeEnum;
}
export namespace AlScanScopeItemAsset {
    export type AssetTypeEnum = 'deployment' | 'region' | 'network' | 'vpc' | 'subnet' | 'host';
    export const assetTypeEnum = {
        Deployment: 'deployment' as AssetTypeEnum,
        Region: 'region' as AssetTypeEnum,
        Network: 'network' as AssetTypeEnum,
        Vpc: 'vpc' as AssetTypeEnum,
        Subnet: 'subnet' as AssetTypeEnum,
        Host: 'host' as AssetTypeEnum
    };
    export type TypeEnum = 'asset';
    export const typeEnum = {
        Asset: 'asset' as TypeEnum
    };
}
