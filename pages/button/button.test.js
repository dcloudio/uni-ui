const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/button/button'

describe('Button.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  async function setPageData(newData) {
    return await page.setData({ data: newData });
  }

  it('click', async () => {
    // TODO 待测试框架支持text的dispatchEvent
    // const btn = await page.$('.btn')
    // expect((await page.data())['count']).toEqual(0)
    // await btn.tap()
    // expect((await page.data())['count']).toEqual(1)
    // await page.setData({
    //   disabled_boolean: true,
    // })
    // await btn.tap()
    // expect((await page.data())['count']).toEqual(1)
    // await page.setData({
    //   disabled_boolean: false,
    // })
    // await btn.tap()
    // expect((await page.data())['count']).toEqual(2)
  })
  it('length', async () => {
    const elements = await page.$$('.btn')
    expect(elements.length).toBe(1)
  })
  it('text', async () => {
    const textBtn = await page.$('.btn')
    expect(await textBtn.text()).toEqual('uni-app-x')
    await setPageData({text: 'uni-app-x button'})
    expect(await textBtn.text()).toEqual('uni-app-x button')
  })
  it('type', async () => {
    const btn = await page.$('.btn')
    expect(await btn.property('type')).toBe('default')
    await setPageData({type_enum_current: 1})
    expect(await btn.property('type')).toBe('primary')
    await setPageData({type_enum_current: 2})
    expect(await btn.property('type')).toBe('warn')
  })
  it('size', async () => {
    const btn = await page.$('.btn')
    expect(await btn.property('size')).toBe('default')
    await setPageData({size_enum_current: 1})
    expect(await btn.property('size')).toBe('mini')
  })
  it('plain', async () => {
    const btn = await page.$('.btn')
    // TODO
    const newValue1 = await btn.property('plain')
    expect(newValue1.toString()).toBe(false + '')
    await setPageData({plain_boolean: true})
    const newValue2 = await btn.property('plain')
    expect(newValue2.toString()).toBe(true + '')
  })
  it('disabled', async () => {
    const btn = await page.$('.btn')
    // TODO
    const newValue1 = await btn.property('disabled')
    expect(newValue1.toString()).toBe(false + '')
    await setPageData({disabled_boolean: true})
    const newValue2 = await btn.property('disabled')
    expect(newValue2.toString()).toBe(true + '')
  })

  it("checkUniButtonElement", async () => {
    if (isMP) {
      expect(1).toBe(1)
      return
    }
    const value = await page.callMethod('checkUniButtonElement')
    expect(value).toBe(true)
  })
  it("setbuttonEmpty", async () => {
    const textBtn = await page.$('.btn')
    await setPageData({text: ''})
    expect(await textBtn.text()).toEqual('')
  })

  // 自定义button和默认button来回切换截图对比
  it("button-screenshot-plain+primary+default", async () => {
    if (isWeb || isMP) {
      expect(1).toBe(1)
      return
    }

    const btn = await page.$('.btn')

    await setPageData({
      text: 'uni-app-x',
      plain_boolean: true,
      type_enum_current: 1,
      size_enum_current: 0,
      disabled_boolean: false,
      default_style: false
    })

    expect(await btn.property('size')).toBe('default')
    expect(await btn.property('plain')).toBe('true')
    expect(await btn.property('type')).toBe('primary')
    const image1 = await program.screenshot({
      fullPage: true
    });
    expect(image1).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'button-screenshot-plain+primary+default'
    }});

    await setPageData({
      text: 'uni-app-x',
      plain_boolean: true,
      type_enum_current: 1,
      size_enum_current: 0,
      disabled_boolean: false,
      default_style: true
    })
    const image2 = await program.screenshot({
      fullPage: true
    });
    expect(image2).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'custom-button-screenshot-plain+primary+default'
    }});

    await setPageData({
      text: 'uni-app-x',
      plain_boolean: true,
      type_enum_current: 1,
      size_enum_current: 0,
      disabled_boolean: false,
      default_style: false
    })
    const image3 = await program.screenshot({
      fullPage: true
    });
    expect(image3).toSaveImageSnapshot({customSnapshotIdentifier() {
      return 'custom-button-screenshot-plain+primary+default-changeToDefault'
    }});

  })
})
