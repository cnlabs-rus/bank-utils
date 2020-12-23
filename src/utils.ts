import { BANK_ORIGIN_NODE } from "./constanst";

export function getCurrentBankHost(origin) {
    return BANK_ORIGIN_NODE[origin] || '';
}