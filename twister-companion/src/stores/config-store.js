import { writable } from 'svelte/store';

const { subscribe, set, update } = writable({
	flipTimeout: 5,
	muted: false
});

export const config = {
	subscribe,
	set,
	update,

	setFlipTimeout: (value) =>
		update((self) => {
			self.flipTimeout = value;

			return self;
		}),

	setMuted: (value) => {
		update((self) => {
			self.muted = value;

			return self;
		});
	},

	toggleMuted: () => {
		update((self) => {
			self.muted = !self.muted;

			return self;
		});
	}
};
