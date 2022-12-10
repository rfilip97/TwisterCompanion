<script context="module">
	export const isTimeoutValid = (timeout) => {
		if (typeof timeout === 'number' && timeout > 0 && timeout < 200) {
			return true;
		}

		return false;
	};
</script>
