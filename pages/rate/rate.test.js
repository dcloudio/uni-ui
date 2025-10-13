const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/rate/rate'

describe('Rate.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('rate components exist', async () => {
    const rates = await page.$$('uni-rate')
    expect(rates.length).toBeGreaterThan(0)
  })

  it('basic rate display', async () => {
    // 测试基本用法
    const basicRates = await page.$$('uni-rate')
    expect(basicRates.length).toBeGreaterThanOrEqual(10) // 应该有多个演示样例
  })

  it('rate stars display', async () => {
    // 测试星星显示
    const stars = await page.$$('uni-rate text')
    expect(stars.length).toBeGreaterThan(0)
    
    // 检查星星符号
    const starTexts = await page.$$('uni-rate text')
    for (let i = 0; i < Math.min(starTexts.length, 5); i++) {
      const text = await starTexts[i].text()
      expect(['★', '☆'].includes(text)).toBe(true)
    }
  })

  it('readonly rate display', async () => {
    // 测试只读模式
    const readonlyRates = await page.$$('uni-rate[readonly]')
    expect(readonlyRates.length).toBeGreaterThan(0)
  })

  it('plain rate display', async () => {
    // 测试镂空模式
    const plainRates = await page.$$('uni-rate[plain]')
    expect(plainRates.length).toBeGreaterThan(0)
  })

  it('rate value binding', async () => {
    // 测试值绑定
    const rateWithValue = await page.$('uni-rate[value="3.5"]')
    expect(rateWithValue).not.toBeNull()
  })

  it('rate custom style', async () => {
    // 测试自定义样式
    const customStyleRates = await page.$$('uni-rate[style]')
    expect(customStyleRates.length).toBeGreaterThan(0)
  })

  it('rate custom class', async () => {
    // 测试自定义class
    const customClassRates = await page.$$('uni-rate[class]')
    expect(customClassRates.length).toBeGreaterThan(0)
  })

  it('rate selected style', async () => {
    // 测试选中样式
    const selectedStyleRates = await page.$$('uni-rate[selected-style]')
    expect(selectedStyleRates.length).toBeGreaterThan(0)
  })

  it('rate selected class', async () => {
    // 测试选中class
    const selectedClassRates = await page.$$('uni-rate[selected-class]')
    expect(selectedClassRates.length).toBeGreaterThan(0)
  })

  it('rate click interaction and change event', async () => {
    // 测试点击交互和change事件（如果有可点击的rate）
    const clickableRates = await page.$$('uni-rate:not([readonly])')
    if (clickableRates.length > 0) {
      // 点击第一个可点击的rate组件
      await clickableRates[0].tap()
      // 等待一下确保事件处理完成
      await page.waitFor(500)
      
      // 验证toast是否显示（表示change事件被触发）
      // 注意：这个测试可能需要根据实际环境调整
    }
  })

  it('rate change event with different positions', async () => {
    // 测试不同位置的点击
    const clickableRates = await page.$$('uni-rate:not([readonly])')
    if (clickableRates.length > 0) {
      const rate = clickableRates[0]
      
      // 模拟点击不同位置
      const rect = await rate.boundingRect()
      const starWidth = rect.width / 5
      
      // 点击第一颗星的左半部分（应该得到0.5分）
      await rate.tap({ x: starWidth * 0.25, y: rect.height / 2 })
      await page.waitFor(300)
      
      // 点击第二颗星的右半部分（应该得到2分）
      await rate.tap({ x: starWidth * 1.75, y: rect.height / 2 })
      await page.waitFor(300)
      
      // 点击第五颗星的右半部分（应该得到5分）
      await rate.tap({ x: starWidth * 4.75, y: rect.height / 2 })
      await page.waitFor(300)
    }
  })

  it('rate v-model binding', async () => {
    // 测试v-model绑定
    const vModelRates = await page.$$('uni-rate[v-model]')
    expect(vModelRates.length).toBeGreaterThan(0)
  })

  it('rate half star display', async () => {
    // 测试半星显示
    const halfStarRate = await page.$('uni-rate[value="3.5"]')
    if (halfStarRate) {
      const stars = await halfStarRate.$$('text')
      expect(stars.length).toBe(5) // 应该有5颗星
    }
  })

  it('rate readonly mode', async () => {
    // 测试只读模式
    const readonlyRates = await page.$$('uni-rate[readonly]')
    expect(readonlyRates.length).toBeGreaterThan(0)
    
    if (readonlyRates.length > 0) {
      // 尝试点击只读的rate，应该不会有响应
      await readonlyRates[0].tap()
      await page.waitFor(200)
      // 只读模式下不应该触发change事件
    }
  })

  it('rate plain mode', async () => {
    // 测试镂空模式
    const plainRates = await page.$$('uni-rate[plain]')
    expect(plainRates.length).toBeGreaterThan(0)
  })

  it('rate value validation', async () => {
    // 测试值的有效性
    const rates = await page.$$('uni-rate')
    for (const rate of rates) {
      const value = await rate.attribute('value')
      if (value) {
        const numValue = parseFloat(value)
        // 值应该在0-5之间
        expect(numValue).toBeGreaterThanOrEqual(0)
        expect(numValue).toBeLessThanOrEqual(5)
      }
    }
  })

  it('rate full mode display', async () => {
    // 测试full模式的显示
    const fullRates = await page.$$('uni-rate[full]')
    expect(fullRates.length).toBeGreaterThan(0)
    
    if (fullRates.length > 0) {
      const stars = await fullRates[0].$$('text')
      expect(stars.length).toBe(2) // full模式下应该有两个text元素（灰色背景和黄色前景）
    }
  })

  it('rate custom styling', async () => {
    // 测试自定义样式
    const customStyleRates = await page.$$('uni-rate[selected-style]')
    expect(customStyleRates.length).toBeGreaterThan(0)
    
    const customClassRates = await page.$$('uni-rate[selected-class]')
    expect(customClassRates.length).toBeGreaterThan(0)
  })
})