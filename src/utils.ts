import { BANK_ORIGIN_NODE } from "./constanst";

export function getCurrentBankHost(origin: string): string {
    return BANK_ORIGIN_NODE[origin] || '';
}