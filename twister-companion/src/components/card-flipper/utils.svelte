<script context="module">
	export const isTimeoutValid = (timeout) => {
		if (typeof timeout === 'number' && timeout > 0 && timeout < 200) {
			return true;
		}

		return false;
	};

	const GetRandomIntegerUpTo = (max) => Math.floor(Math.random() * max);

	export const spin = ({ bodyParts, colors }) => {
		const NbBodyParts = bodyParts.length;
		const NbColors = colors.length;

		return [GetRandomIntegerUpTo(NbBodyParts), GetRandomIntegerUpTo(NbColors)];
	};
</script>
