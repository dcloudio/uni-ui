const PAGE_PATH = '/pages/uni-ui/index-bar/index-bar'

describe('index-bar', () => {
  let page

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
    await page.waitFor(500)
  })

  async function tapControlButton(index) {
    const buttons = await page.$$('.control-btn')
    expect(buttons.length).toBeGreaterThan(index)
    await buttons[index].tap()
    await page.waitFor(500)
  }

  it('index-bar custom style and indexs snapshot', async () => {
    await tapControlButton(0)
    await tapControlButton(1)

    expect(await page.data('data.useCustomStyle')).toBe(true)
    expect(await page.data('data.useCustomIndexs')).toBe(true)

    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
