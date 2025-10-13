const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/badge/badge'

describe('Badge.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('badge components exist', async () => {
    const badges = await page.$$('uni-badge')
    expect(badges.length).toBeGreaterThan(0)
  })

  it('text badge display', async () => {
    // 测试数字badge
    const textBadges = await page.$$('.demo-badge')
    expect(textBadges.length).toBeGreaterThan(0)
    
    // 检查是否有包含文字的badge
    const badgeTexts = await page.$$('uni-badge text')
    expect(badgeTexts.length).toBeGreaterThan(0)
  })

  it('dot badge display', async () => {
    // 测试红点模式
    const badges = await page.$$('uni-badge')
    expect(badges.length).toBeGreaterThanOrEqual(6) // 应该有6个演示样例
  })

  it('custom badge class', async () => {
    // 测试自定义样式
    const customBadges = await page.$$('uni-badge[badge-class="custom-badge"]')
    expect(customBadges.length).toBe(1)
  })

  it('custom badge style', async () => {
    // 测试自定义style
    const styleBadges = await page.$$('uni-badge[badge-style]')
    expect(styleBadges.length).toBe(1)
  })

  it('badge positioning', async () => {
    // 测试badge定位是否正确
    const badge = await page.$('uni-badge')
    const badgeStyle = await badge.property('style')
    expect(badgeStyle).toContain('position: relative')
  })

  it('slot content display', async () => {
    // 测试插槽内容是否正常显示
    const slotContents = await page.$$('uni-badge view')
    expect(slotContents.length).toBeGreaterThan(0)
  })
})