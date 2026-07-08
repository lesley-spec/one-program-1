import puppeteer from 'puppeteer';

const URL = 'http://localhost:5173/one-program-1/persona-nav-prototypes.html';
const OPTIONS = [
  'aisha-nav1', 'aisha-nav2', 'aisha-nav3',
  'priya-nav1', 'priya-nav2', 'priya-nav3',
  'marcus-nav1', 'marcus-nav2', 'marcus-nav3',
];

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', msg => {
  if (msg.type() === 'error') errors.push('console.error: ' + msg.text());
});

await page.goto(URL, { waitUntil: 'networkidle2' });
// Wait for switchPersona to complete first render
await new Promise(r => setTimeout(r, 500));

for (const value of OPTIONS) {
  await page.evaluate(v => {
    const sel = document.getElementById('persona-select');
    sel.value = v;
    sel.dispatchEvent(new Event('change', { bubbles: true }));
  }, value);
  await new Promise(r => setTimeout(r, 200));

  const state = await page.evaluate(() => {
    const sidebar = document.querySelector('.sidebar');
    const topLinks = document.querySelector('.topnav-links');
    const banner = document.getElementById('context-banner-title');
    const hero = document.getElementById('persona-hero');
    return {
      sidebarStructure: sidebar?.querySelector('.nav-restructure-sidebar')?.getAttribute('data-structure'),
      sidebarTitle: sidebar?.querySelector('.nav-restructure-title')?.textContent,
      sidebarPersona: sidebar?.querySelector('.nav-persona-name')?.textContent,
      firstL1: sidebar?.querySelector('.nav-l1-item')?.querySelector('.nav-l1-label')?.textContent,
      firstTopLink: topLinks?.querySelector('.topnav-link')?.childNodes[0]?.nodeValue?.trim?.() || topLinks?.querySelector('.topnav-link')?.textContent?.replace(/\d.*$/, '').trim(),
      topLinkCount: topLinks?.querySelectorAll('.topnav-link.nav-restructure-link').length,
      bannerTitle: banner?.textContent,
      heroFirstLine: hero?.textContent?.trim().slice(0, 60),
    };
  });
  console.log(`\n${value.padEnd(15)}  ${JSON.stringify(state, null, 0)}`);
}

if (errors.length) {
  console.log('\n\n=== ERRORS ===');
  errors.forEach(e => console.log(e));
}

await browser.close();
