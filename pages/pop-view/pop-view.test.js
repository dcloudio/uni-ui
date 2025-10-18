const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/pop-view/pop-view'

describe('PopView.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('page loads correctly', async () => {
    const title = await page.$('text')
    expect(title).toBeTruthy()
  })

  it('center position pop display', async () => {
    // 点击居中弹出按钮
    const centerBtn = await page.$('button')
    await centerBtn.tap()
    await page.waitFor(500)

    // 检查弹层是否显示
    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    // 检查是否有蒙层
    const mask = await page.$('.mask')
    expect(mask).toBeTruthy()

    // 关闭弹层
    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('top position pop display', async () => {
    // 获取所有按钮，第二个是顶部弹出
    const buttons = await page.$$('button')
    await buttons[1].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    // 关闭弹层
    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('bottom position pop display', async () => {
    const buttons = await page.$$('button')
    await buttons[2].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('left position pop display', async () => {
    const buttons = await page.$$('button')
    await buttons[3].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('right position pop display', async () => {
    const buttons = await page.$$('button')
    await buttons[4].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('mask display test', async () => {
    // 显示蒙层
    const buttons = await page.$$('button')
    await buttons[5].tap()
    await page.waitFor(500)

    const mask = await page.$('.mask')
    expect(mask).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('mask click close test', async () => {
    // 点击蒙层关闭
    const buttons = await page.$$('button')
    await buttons[6].tap()
    await page.waitFor(500)

    const mask = await page.$('.mask')
    expect(mask).toBeTruthy()

    // 点击蒙层
    await mask.tap()
    await page.waitFor(500)

    // 弹层应该关闭
    const popView = await page.$('pop-view')
    expect(popView).toBeFalsy()
  })

  it('transparent mask test', async () => {
    // 透明蒙层
    const buttons = await page.$$('button')
    await buttons[7].tap()
    await page.waitFor(500)

    const mask = await page.$('.mask')
    expect(mask).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('auto hide test', async () => {
    // 自动隐藏
    const buttons = await page.$$('button')
    await buttons[8].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    // 等待3.5秒，弹层应该自动关闭
    await page.waitFor(3500)

    const popViewAfter = await page.$('pop-view')
    expect(popViewAfter).toBeFalsy()
  })

  it('custom pop style test', async () => {
    // 自定义弹层样式
    const buttons = await page.$$('button')
    await buttons[9].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('custom mask style test', async () => {
    // 自定义蒙层样式
    const buttons = await page.$$('button')
    await buttons[10].tap()
    await page.waitFor(500)

    const mask = await page.$('.mask')
    expect(mask).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('follow element up test', async () => {
    // 跟随元素向上
    const buttons = await page.$$('button')
    await buttons[11].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('follow element down test', async () => {
    // 跟随元素向下
    const buttons = await page.$$('button')
    await buttons[12].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('follow element left test', async () => {
    // 跟随元素向左
    const buttons = await page.$$('button')
    await buttons[13].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('follow element right test', async () => {
    // 跟随元素向右
    const buttons = await page.$$('button')
    await buttons[14].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('follow element with arrow test', async () => {
    // 带箭头
    const buttons = await page.$$('button')
    await buttons[15].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    // 检查是否有箭头
    const arrow = await page.$('.menu-arrow')
    expect(arrow).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('follow element with offset test', async () => {
    // 带偏移
    const buttons = await page.$$('button')
    await buttons[16].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('pop content display test', async () => {
    // 测试弹层内容显示
    const buttons = await page.$$('button')
    await buttons[0].tap()
    await page.waitFor(500)

    const popTitle = await page.$('pop-view text')
    expect(popTitle).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)
  })

  it('close event test', async () => {
    // 测试关闭事件
    const buttons = await page.$$('button')
    await buttons[0].tap()
    await page.waitFor(500)

    const popView = await page.$('pop-view')
    expect(popView).toBeTruthy()

    const closeBtn = await page.$('pop-view button')
    await closeBtn.tap()
    await page.waitFor(500)

    const popViewAfter = await page.$('pop-view')
    expect(popViewAfter).toBeFalsy()
  })
})
