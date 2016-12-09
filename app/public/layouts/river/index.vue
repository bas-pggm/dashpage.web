<template lang="pug">
	.wrapper
		lheader
		.container
			div(v-if="isLeftLayout").row
				.columns.seven
					slot(name="maincontent")
				.columns.two strootje
				.columns.three
					slot(name="sidecontent")
			div(v-if="isRightLayout").row
				.columns.three
					slot(name="sidecontent")
				.columns.two strootje
				.columns.seven
					slot(name="maincontent")
		lfooter
</template>

<script>
	import header from './header.vue';
	import footer from './footer.vue';

	export default {
		components: {
			'lheader': header,
			'lfooter': footer
		},

		props: {
			layout: {
				type: String,
				default: 'left',
				validator: ( value ) => { return value === 'left' || value === 'right' }
			}
		},

		computed: {
			isLeftLayout() {
				return this.layout === 'left';
			},

			isRightLayout() {
				return this.layout === 'right';
			}
		}
	};
</script>
