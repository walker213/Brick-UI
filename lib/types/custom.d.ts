// 给所有的svg文件加入默认导出，这样import赋值（import icon from ''）才不会报错
declare module '*.svg' {
	const content: any;
	export default content;
}