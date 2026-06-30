const PAGE_PATHS = [
  '/pages/uni-ui/tab-bar/tab-bar',
  '/pages/uni-ui/tab-bar/tab-bar-dark',
  '/pages/uni-ui/tab-bar/tab-bar-custom',
  '/pages/uni-ui/tab-bar/tab-bar-midbutton',
  '/pages/uni-ui/tab-bar/tab-bar-midbutton-notch'
]

describe('tab-bar', () => {
  let page

  async function launchPage(pagePath) {
    page = await program.reLaunch(pagePath)
    await page.waitFor('view')
    await page.waitFor(1000)
  }

  it.each(PAGE_PATHS)('%s snapshot', async (pagePath) => {
    await launchPage(pagePath)

    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
