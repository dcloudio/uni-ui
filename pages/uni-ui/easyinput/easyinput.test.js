const PAGE_PATH = '/pages/uni-ui/easyinput/easyinput'

describe('easyinput', () => {
  let page

  beforeEach(async () => {
    page = await program.reLaunch(PAGE_PATH)
    await page.waitFor('view')
  })

  it('keeps model values in sync for text, zero and null', async () => {
    const externalInput = await page.$('.test-external-input')

    expect(await page.data('data.basicValue')).toBe('初始内容')
    expect(await page.data('data.externalValue')).toBe('初始值')
    expect(await externalInput.value()).toBe('初始值')

    await page.callMethod('setExternalValue', 0)
    await page.waitFor(100)
    expect(await page.data('data.externalValue')).toBe(0)
    expect(await externalInput.value()).toBe('0')

    await page.callMethod('setExternalValue', null)
    await page.waitFor(100)
    expect(await page.data('data.externalValue')).toBeNull()
    expect(await externalInput.value()).toBe('')

    await page.callMethod('setExternalValue', '外部更新')
    await page.waitFor(100)
    expect(await page.data('data.externalValue')).toBe('外部更新')
    expect(await externalInput.value()).toBe('外部更新')
  })

  it('updates v-model and applies trim on input', async () => {
    const basicInput = await page.$('.test-basic-input')
    await basicInput.input('新的内容')
    expect(await page.data('data.basicValue')).toBe('新的内容')

    const trimInput = await page.$('.test-trim-input')
    await trimInput.input(' a b c ')
    expect(await page.data('data.trimValue')).toBe('abc')
  })

  it('handles clear, password and custom icon actions', async () => {
    const clearIcon = await page.$('.test-clear-icon')
    await clearIcon.tap()
    expect(await page.data('data.basicValue')).toBe('')
    expect(await page.data('data.clearCount')).toBe(1)

    const passwordIcons = await page.$$('.test-password-icon')
    expect(passwordIcons.length).toBe(2)
    await passwordIcons[0].tap()
    expect(await page.data('data.passwordVisible')).toBe(true)
    expect(await page.data('data.eyesCount')).toBe(1)

    const prefixIcon = await page.$('.test-prefix-icon')
    await prefixIcon.tap()
    expect(await page.data('data.lastIcon')).toBe('prefix')

    const suffixIcon = await page.$('.test-suffix-icon')
    await suffixIcon.tap()
    expect(await page.data('data.lastIcon')).toBe('suffix')
    expect(await page.data('data.iconClickCount')).toBe(2)

    expect(await page.$('.test-textarea-prefix')).not.toBeNull()
  })

  it('easyinput snapshot', async () => {
    const image = await program.screenshot({
      fullPage: true
    })
    expect(image).toSaveImageSnapshot()
  })
})
