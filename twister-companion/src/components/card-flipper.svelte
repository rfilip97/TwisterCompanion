<script>
	import FlipCard from './flip-card/flip-card.svelte';

	export let data;
	export let flipTimeout = 5;

    const flipBackTimeout = 0.9;

	$: flippedCard = true;

	setInterval(async () => {
		flippedCard = false;

		await setTimeout(() => {
			flippedCard = true;
		}, flipBackTimeout * 1000);
	}, flipTimeout * 1000);
</script>

<FlipCard
	symbol={data.bodyParts[0].symbol}
	rotated={data.bodyParts[0].rotated}
	color={data.colors[0]}
	{flipTimeout}
	{flippedCard}
/>
