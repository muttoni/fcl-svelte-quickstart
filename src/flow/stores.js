import { writable } from 'svelte/store';

export let user = writable(null);
export let profile = writable(null);