import { writable } from 'svelte/store';

const { subscribe, set, update } = writable({
	flipTimeout: 5
});

export const config = {
	subscribe,
	set,
	update,

	setFlipTimeout: (value) =>
		update((self) => {
			self.flipTimeout = value;

			return self;
		})
};
