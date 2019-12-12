let importAll = ( requireContext ) => requireContext.keys().forEach(requireContext)

const svgs = require.context("../../icons/", true, /\.svg$/);
const keys = svgs.keys() || [];

try {
	importAll(svgs);
} catch (error) {
	// console.log(error);
}

const reg = /(.\/)([a-zA-Z\-]+)(.svg)/;
const svgNames = keys.map(key => reg.exec(key)[2]);

export { svgNames };