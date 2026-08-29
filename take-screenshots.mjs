import puppeteer from 'puppeteer-core';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = 'C:/Users/ammar/.gemini/antigravity/brain/1813e6c2-689f-443e-933e-56700ed9ce09';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  
  // Wait for fonts and initial render
  await new Promise(r => setTimeout(r, 2000));

  // Depth 1: Top Hero
  await page.screenshot({ path: path.join(outDir, 'depth1_hero.png') });
  console.log('Captured depth 1');

  // Depth 2: Scroll into Problem Statement & Services
  await page.evaluate(() => window.scrollTo(0, 2400));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'depth2_problem_services.png') });
  console.log('Captured depth 2');

  // Depth 3: Scroll into Process
  await page.evaluate(() => window.scrollTo(0, 4200));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'depth3_process_why.png') });
  console.log('Captured depth 3');

  // Depth 4: Scroll into Founder's Note
  await page.evaluate(() => window.scrollTo(0, 5800));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'depth4_founder_note.png') });
  console.log('Captured depth 4');

  // Depth 5: Scroll to Contact & Footer
  await page.evaluate(() => window.scrollTo(0, 7200));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'depth5_contact_footer.png') });
  console.log('Captured depth 5');

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
