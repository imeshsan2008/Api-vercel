const { test, expect } = require('@playwright/test');

test('homepage has title', async ({ page }) => {
  await page.goto('https://example.com/');
  const title = await page.title();
  expect(title).toBe('Expected Title');
});
