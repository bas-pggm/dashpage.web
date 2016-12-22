class Resolver {
	apply(resolver) {
		resolver.plugin("resolve", function (context, request) {
			// const matchLoadRequest = /^([a-zA-Z0-9-_\/]+)(?!\.(?!vue))$/.exec(request.path);
			const matchLoadRequest = /^([a-zA-Z0-9-_\/]+)\.vue$/.exec(request.path);

			if (matchLoadRequest) {
				request.query = '?' + request.path;
				request.file=true;
				request.module = false;
				request.path = __filename;
			}
		});
	}
};



export default class ComponentResolverPlugin {
	constructor(opts) {
		console.log(opts)
	}

	apply( compiler ) {
		compiler.resolvers.normal.apply(new Resolver());
	}
};
