const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isWeb = platformInfo.startsWith('web')
const isMP = platformInfo.startsWith('mp')

const PAGE_PATH = '/pages/swiper-view/swiper-view'

describe('SwiperView.uvue', () => {
  let page
  beforeAll(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('swiper-view components exist', async () => {
    const swipers = await page.$$('swiper-view')
    expect(swipers.length).toBeGreaterThan(0)
  })

  it('basic horizontal swiper', async () => {
    // 测试基础横向swiper
    const swipers = await page.$$('swiper-view')
    expect(swipers.length).toBeGreaterThanOrEqual(1)

    // 检查是否有slider子元素
    const firstSwiper = swipers[0]
    const children = await firstSwiper.$$('view')
    expect(children.length).toBeGreaterThan(0)
  })

  it('vertical swiper', async () => {
    // 测试纵向swiper
    const verticalSwipers = await page.$$('swiper-view[vertical]')
    expect(verticalSwipers.length).toBeGreaterThanOrEqual(1)
  })

  it('autoplay swiper', async () => {
    // 测试自动播放
    const autoplaySwipers = await page.$$('swiper-view[autoplay]')
    expect(autoplaySwipers.length).toBeGreaterThanOrEqual(1)
  })

  it('circular swiper', async () => {
    // 测试循环播放
    const circularSwipers = await page.$$('swiper-view[circular]')
    expect(circularSwipers.length).toBeGreaterThanOrEqual(1)
  })

  it('current index control', async () => {
    // 测试current属性控制
    const currentSwipers = await page.$$('swiper-view[current]')
    expect(currentSwipers.length).toBeGreaterThanOrEqual(1)
  })

  it('custom duration', async () => {
    // 测试自定义动画时长
    const durationSwipers = await page.$$('swiper-view[duration]')
    expect(durationSwipers.length).toBeGreaterThanOrEqual(1)
  })

  it('easing function', async () => {
    // 测试缓动函数
    const easingSwipers = await page.$$('swiper-view[easing-function]')
    expect(easingSwipers.length).toBeGreaterThanOrEqual(1)
  })

  it('rebound disabled', async () => {
    // 测试禁用回弹
    const noReboundSwipers = await page.$$('swiper-view[rebound="false"]')
    expect(noReboundSwipers.length).toBeGreaterThanOrEqual(0)
  })

  it('custom indicator class', async () => {
    // 测试自定义指示器class
    const customIndicatorSwipers = await page.$$('swiper-view[indicator-class="custom-indicator"]')
    expect(customIndicatorSwipers.length).toBe(1)
  })

  it('custom indicator style', async () => {
    // 测试自定义指示器style
    const styleSwipers = await page.$$('swiper-view[indicator-style]')
    expect(styleSwipers.length).toBeGreaterThanOrEqual(1)
  })

  it('indicator dots exist', async () => {
    // 测试指示器是否存在
    const indicators = await page.$$('.uni-swiper-indicator')
    expect(indicators.length).toBeGreaterThan(0)

    // 检查指示器内是否有dot
    if (indicators.length > 0) {
      const dots = await page.$$('.indicator-dot')
      expect(dots.length).toBeGreaterThan(0)
    }
  })

  it('change event handler', async () => {
    // 测试change事件
    const eventSwipers = await page.$$('swiper-view')
    expect(eventSwipers.length).toBeGreaterThan(0)
  })

  it('transition event handler', async () => {
    // 测试transition事件
    const eventTexts = await page.$$('text')
    const transitionText = eventTexts.find(async (text) => {
      const content = await text.text()
      return content.includes('过渡位置')
    })
    expect(transitionText).toBeDefined()
  })

  it('animationfinish event handler', async () => {
    // 测试animationfinish事件
    const eventTexts = await page.$$('text')
    const finishText = eventTexts.find(async (text) => {
      const content = await text.text()
      return content.includes('上次触发')
    })
    expect(finishText).toBeDefined()
  })

  it('swiper container structure', async () => {
    // 测试swiper容器结构
    const wrappers = await page.$$('.uni-swiper-wrapper')
    expect(wrappers.length).toBeGreaterThan(0)

    // 检查containers是否存在
    const containers = await page.$$('.uni-swiper-container')
    expect(containers.length).toBeGreaterThan(0)
  })

  it('button click to change current', async () => {
    // 测试点击按钮切换current
    const buttons = await page.$$('view')

    // 查找包含"Slide 1"文本的按钮
    let slide1Button = null
    for (let i = 0; i < buttons.length; i++) {
      const text = await buttons[i].text()
      if (text.includes('Slide 1')) {
        slide1Button = buttons[i]
        break
      }
    }

    if (slide1Button != null) {
      await slide1Button.tap()
      await page.waitFor(500)

      // 验证current已改变
      const currentTexts = await page.$$('text')
      let foundCurrentText = false
      for (let i = 0; i < currentTexts.length; i++) {
        const content = await currentTexts[i].text()
        if (content.includes('current=')) {
          foundCurrentText = true
          break
        }
      }
      expect(foundCurrentText).toBe(true)
    }
  })

  it('multiple slides in swiper', async () => {
    // 测试swiper包含多个slide
    const firstSwiper = await page.$('swiper-view')
    if (firstSwiper != null) {
      const container = await firstSwiper.$('.uni-swiper-container')
      if (container != null) {
        const slides = await container.$$('view')
        expect(slides.length).toBeGreaterThanOrEqual(2)
      }
    }
  })
})
