import { BANK_HOSTS } from "./constanst";

export function getCurrentBankHost() {
    const { hostname } = location;
    return BANK_HOSTS[hostname] || '';
}