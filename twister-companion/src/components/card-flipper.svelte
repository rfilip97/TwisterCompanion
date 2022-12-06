<script>
	import FlipCard from './flip-card/flip-card.svelte';

	import { flipTimeout } from '../stores/flip-timeout-store';

	export let data;

	const flipBackTimeout = 0.9;

	$: flippedCard = true;

	const spin = (data) => {
		const NbBodyParts = data.bodyParts.length;
		const NbColors = data.colors.length;

		const GetRandomIntegerUpTo = (max) => Math.floor(Math.random() * max);

		return [GetRandomIntegerUpTo(NbBodyParts), GetRandomIntegerUpTo(NbColors)];
	};

	const isTimeoutValid = (timeout) => {
		if (typeof timeout === 'number' && timeout > 0 && timeout < 200) {
			return true;
		}

		return false;
	};

	let [bodyPartIndex, colorIndex] = spin(data);

	let clear;
	$: {
		clearInterval(clear);
		clear = setInterval(
			async () => {
				flippedCard = false;

				setTimeout(() => {
					[bodyPartIndex, colorIndex] = spin(data);
				}, flipBackTimeout * 1000);

				setTimeout(() => {
					flippedCard = true;
				}, flipBackTimeout * 1000);
			},
			isTimeoutValid($flipTimeout) ? $flipTimeout * 1000 : 5000
		);
	}
</script>

<FlipCard
	symbol={data.bodyParts[bodyPartIndex].symbol}
	rotated={data.bodyParts[bodyPartIndex].rotated}
	color={data.colors[colorIndex]}
	{flippedCard}
/>
