<script context="module">
	export const isTimeoutValid = (timeout) => {
		if (typeof timeout === 'number' && timeout > 0 && timeout < 200) {
			return true;
		}

		return false;
	};

	export const spin = ({ bodyParts, colors }) => {
		const NbBodyParts = bodyParts.length;
		const NbColors = colors.length;

		const GetRandomIntegerUpTo = (max) => Math.floor(Math.random() * max);

		return [GetRandomIntegerUpTo(NbBodyParts), GetRandomIntegerUpTo(NbColors)];
	};
</script>
