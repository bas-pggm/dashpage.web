<template lang="pug">
	a(:href="route", :class="{ seven: selected, three: !selected }").nav-item.columns
		slot
</template>

<script>
	export default {
		props: { route: String, required: true },
		computed: {
			selected: function() {
				return this.route === window.location.pathname;
			}
		}
	};
</script>
