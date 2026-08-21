import { Hydrafetch } from '../src/index.js';

declare const hf: Hydrafetch;

async function formatsNarrowTheResult() {
  const a = await hf.scrape('u');
  const md: string = a.markdown; // required by default
  const maybeHtml: string | undefined = a.html;

  const b = await hf.scrape('u', { formats: ['html', 'links'] });
  const html: string = b.html; // required because it was requested
  const links: string[] = b.links;
  const maybeMd: string | undefined = b.markdown; // not requested, so optional

  return [md, maybeHtml, html, links, maybeMd];
}

async function jobsExposePagesNotData() {
  const job = await hf.batchAndWait(['u']);
  const pages = job.pages ?? [];
  const first: string | undefined = pages[0]?.data?.markdown;
  return first;
}

async function extractIsAnEnvelope() {
  const out = await hf.extract<{ price: number }>('u', { prompt: 'price' });
  const price: number | undefined = out.results[0]?.data?.price;
  return price;
}

async function convenienceReturnsAString() {
  const s: string = await hf.markdown('u');
  return s;
}

export { formatsNarrowTheResult, jobsExposePagesNotData, extractIsAnEnvelope, convenienceReturnsAString };
