<script context="module">
	export const isTimeoutValid = (timeout) => {
		if (typeof timeout === 'number' && timeout > 0 && timeout < 200) {
			return true;
		}

		return false;
	};

	export const spin = (data) => {
		const NbBodyParts = data.bodyParts.length;
		const NbColors = data.colors.length;

		const GetRandomIntegerUpTo = (max) => Math.floor(Math.random() * max);

		return [GetRandomIntegerUpTo(NbBodyParts), GetRandomIntegerUpTo(NbColors)];
	};
</script>
