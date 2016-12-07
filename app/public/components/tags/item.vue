<template lang="pug">
	code.tag {{tag.Name}}
</template>

<script>
	export default {
		props: {
			tag: {
				type: Object,
				required: true
			}
		}
	};
</script>
