const PAGE_PATH = '/pages/uni-ui/refresh-box/refresh-box'

describe('refresh-box', () => {
  let page

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  async function setPageData(newData) {
    return await page.setData({
      data: newData
    })
  }

  it('refresh-box state', async () => {
    expect(await page.data('data.listCount1')).toBe(3)
    expect(await page.data('data.refreshing1')).toBe(false)
    expect(await page.data('data.pullingDistance1')).toBe(0)
    expect(await page.data('data.listCount4')).toBe(3)

    await setPageData({
      listCount1: 8,
      refreshing1: true,
      pullingDistance1: 45,
      listCount4: 6,
      refreshing4: true,
      pullingDistance4: 30
    })

    expect(await page.data('data.listCount1')).toBe(8)
    expect(await page.data('data.refreshing1')).toBe(true)
    expect(await page.data('data.pullingDistance1')).toBe(45)
    expect(await page.data('data.listCount4')).toBe(6)
    expect(await page.data('data.refreshing4')).toBe(true)
    // expect(await page.data('data.pullingDistance4')).toBe(30)
  })

  it('refresh-box snapshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
