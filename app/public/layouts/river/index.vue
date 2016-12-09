<template lang="pug">
	.wrapper
		lheader
		.container
			div(v-if="isLeftSide").row
				.columns.seven
					slot(name="maincontent")
				.columns.two strootje
				.columns.three
					slot(name="sidecontent")
			div(v-if="isRightSide").row
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
			side: {
				type: String,
				default: 'left',
				validator: ( value ) => { return value === 'left' || value === 'right' }
			}
		},

		computed: {
			isLeftSide() {
				return this.side === 'left';
			},

			isRightSide() {
				return this.side === 'right';
			}
		}
	};
</script>
