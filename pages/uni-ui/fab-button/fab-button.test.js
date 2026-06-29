const PAGE_PATH = '/pages/uni-ui/fab-button/fab-button'

describe('fab-button', () => {
	let page

	beforeEach(async () => {
		page = await program.reLaunch(PAGE_PATH)
		await page.waitFor('view')
	})

	it('fab-button snapshot', async () => {
		const image = await program.screenshot({
			fullPage: true,
		})
		expect(image).toSaveImageSnapshot()
	})

	it('fab-button first example swipe', async () => {
		await page.waitFor(500)

		const startLeft = await page.data('data.left')
		const startTop = await page.data('data.top')
		const el = await page.$('#move-fab')
		await el.touchstart({
			touches: [
				{
					identifier: 1,
					pageX: 37,
					pageY: 69,
					clientX: 37,
					clientY: 69,
					screenX: 37,
					screenY: 69,
				},
			],
			changedTouches: [
				{
					identifier: 1,
					pageX: 37,
					pageY: 69,
					clientX: 37,
					clientY: 69,
					screenX: 37,
					screenY: 69,
				},
			],
		})
		await page.waitFor(100)
		await el.touchmove({
			touches: [
				{
					identifier: 1,
					pageX: 117,
					pageY: 129,
					clientX: 117,
					clientY: 129,
					screenX: 117,
					screenY: 129,
				},
			],
			changedTouches: [
				{
					identifier: 1,
					pageX: 117,
					pageY: 129,
					clientX: 117,
					clientY: 129,
					screenX: 117,
					screenY: 129,
				},
			],
		})
		await page.waitFor(100)
		await el.touchend({
			touches: [
				{
					identifier: 1,
					pageX: 117,
					pageY: 129,
					clientX: 117,
					clientY: 129,
					screenX: 117,
					screenY: 129,
				},
			],
			changedTouches: [
				{
					identifier: 1,
					pageX: 117,
					pageY: 129,
					clientX: 117,
					clientY: 129,
					screenX: 117,
					screenY: 129,
				},
			],
		})

		await page.waitFor(100)
		const endLeft = await page.data('data.left')
		const endTop = await page.data('data.top')
		expect(Math.abs(endLeft - (startLeft + 80))).toBeLessThanOrEqual(2)
		expect(Math.abs(endTop - (startTop + 60))).toBeLessThanOrEqual(2)
	})
})
