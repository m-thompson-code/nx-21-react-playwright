import { test, expect } from '@playwright/test';

/**
 * Promise wrapper for setTimeout
 */
const delay = (milliseconds: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, milliseconds) );
}

test('has title', async ({ page }) => {
  await page.goto('/');

  await delay(30_000);

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
