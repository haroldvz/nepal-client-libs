import { AlAuditObject } from './auditObject';
import { AlScanScope } from './scanScope';
import { AlScanWindowContinuousPeriodMonthly } from './scanWindowContinuousPeriodMonthly';
import { AlScanWindowContinuousPeriodWeekly } from './scanWindowContinuousPeriodWeekly';
import { AlScanWindowSelectedDaysOfMonth } from './scanWindowSelectedDaysOfMonth';
import { AlScanWindowSelectedDaysOfWeek } from './scanWindowSelectedDaysOfWeek';

/**
 * Scan Schedule definition.
 */
export interface AlScanSchedule {
    readonly id?: string;
    name?: string;
    /**
     * Specifies whether the schedule is active or not.
     */
    enabled?: boolean;
    /**
     * Specifies which type of scan the schedule should apply to. There are 3 types of scans
     *   vulnerability - internal network scan. Requires an appliance to be deployed within a customer's network.
     *                   Primary target are assets of host type that are in the scope of the schedule and within
     *                   the scope of protection of the deployment.
     *   external - external network scan. Does not require appliances to be deployed, as it is performed from within
     *              Alert Logic network against external assets. Primary target are assets of external-ip and external-dns-name
     *              types that are in the scope of the schedule and within the scope of protection of the deployment.
     *   discovery - internal host-lookup scan. Requires an appliance to be deployed within a customer's network.
     *               Specific only to datacenter type of deployment, where cloud API cannot be used to enumerate assets.
     *               Used primarily to find active hosts in networks that are in the scope of protection of the deployment.
     *               Primary target are assets of network or vpc type.
     */
    type_of_scan?: AlScanSchedule.TypeOfScanEnum;
    /**
     * Specifies the SLA period of how frequently consecutive scans should target individual targets within the deployment.
     * Depending on characteristicts of the workload or its compliance and security requirements,
     * different targets (e.g. hosts, external ip addresses, networks) of a certain scanning scope
     * (e.g. hosts within certain subnets or belonging to certain CIDR ranges) may require different frequency of scans.
     * By setting `scan_frequency` to `weekly`, Alert Logic will aim to scan each target within the scope of a Scan Schedule
     * once every 7 days (168 hours), adhering to the date/time constraints specified by `scan_windows` parameter.
     * Please note when the same host effectively belongs to two distinct Scan Schedules, the higher frequency
     * (e.g. daily over weekly) will be respected for both schedules and union of `scan_windows` will be considered
     * as time periods when scans will be allowed to occur.
     */
    scan_frequency?: AlScanSchedule.ScanFrequencyEnum;
    /**
     * Specifies the time periods when the Scan Schedule should be active.
     * Please note there are four types of `scan_windows`, defined as following models:
     * - `ScanWindowSelectedDaysOfWeek`
     * - `ScanWindowSelectedDaysOfMonth`
     * - `ScanWindowContinuousPeriodWeekly`
     * - `ScanWindowContinuousPeriodMonthly`
     * For details please refer to the documentation of the above models.
     */
    scan_windows?: (AlScanWindowSelectedDaysOfWeek | AlScanWindowSelectedDaysOfMonth | AlScanWindowContinuousPeriodWeekly | AlScanWindowContinuousPeriodMonthly)[];
    /**
     * Specifies what assets are considered to be scanned within designated periods defined by `scan_windows` parameter,
     * setting the SLA as specified by `scan_frequency` parameter.
     */
    scan_scope?: AlScanScope;
    created?: AlAuditObject;
    modified?: AlAuditObject;
}
export namespace AlScanSchedule {
    export type TypeOfScanEnum = 'vulnerability' | 'external' | 'discovery';
    export const typeOfScanEnum = {
        Vulnerability: 'vulnerability' as TypeOfScanEnum,
        External: 'external' as TypeOfScanEnum,
        Discovery: 'discovery' as TypeOfScanEnum
    };
    export type ScanFrequencyEnum = 'automatic' | 'daily' | 'weekly' | 'monthly';
    export const scanFrequencyEnum = {
        Automatic: 'automatic' as ScanFrequencyEnum,
        Daily: 'daily' as ScanFrequencyEnum,
        Weekly: 'weekly' as ScanFrequencyEnum,
        Monthly: 'monthly' as ScanFrequencyEnum
    };
}
