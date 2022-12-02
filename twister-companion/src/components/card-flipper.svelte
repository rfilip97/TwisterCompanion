<script>
	import FlipCard from './flip-card/flip-card.svelte';

	export let data;
	export let flipTimeout = 5;

	const flipBackTimeout = 0.9;

	$: flippedCard = true;

	const spin = (data) => {
		const NbBodyParts = data.bodyParts.length;
		const NbColors = data.colors.length;

		const GetRandomIntegerUpTo = (max) => Math.floor(Math.random() * max);

		return [GetRandomIntegerUpTo(NbBodyParts), GetRandomIntegerUpTo(NbColors)];
	};

	let [bodyPartIndex, colorIndex] = spin(data);

	const startFlipping = () => {
		setInterval(async () => {
			flippedCard = false;

			await setTimeout(() => {
				[bodyPartIndex, colorIndex] = spin(data);
			    }, flipBackTimeout * 1000);

			await setTimeout(() => {
				flippedCard = true;
			}, flipBackTimeout * 1000);
		}, flipTimeout * 1000);
	};

	startFlipping();
</script>

<FlipCard
	symbol={data.bodyParts[bodyPartIndex].symbol}
	rotated={data.bodyParts[bodyPartIndex].rotated}
	color={data.colors[colorIndex]}
	{flippedCard}
/>
