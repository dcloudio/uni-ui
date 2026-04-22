const PAGE_PATH = '/pages/uni-ui/fab-button/fab-button'

describe('fab-button', () => {
	let page

	beforeEach(async () => {
		page = await program.reLaunch(PAGE_PATH)
		await page.waitFor('view')
	})

    it('fab-button snapshot', async () => {
        const image = await program.screenshot({
            fullPage: true
        })
        expect(image).toSaveImageSnapshot()
    })
})
