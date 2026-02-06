export function isPC() {
	return uni.getSystemInfoSync().deviceType === "pc"
}
