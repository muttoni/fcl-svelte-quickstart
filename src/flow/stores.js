import { writable } from 'svelte/store';

export const user = writable(null);
export const profile = writable(null);
export const transactionStatus = writable(null);