import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import openapiTS, { astToString } from 'openapi-typescript';

const SPEC_URL = process.env.HYDRAFETCH_SPEC ?? 'https://api.hydrafetch.com/openapi.json';
const OUT = new URL('../src/generated/api.ts', import.meta.url);
const HASH = new URL('../openapi.sha256', import.meta.url);

const spec = SPEC_URL.startsWith('http')
  ? await (await fetch(SPEC_URL)).text()
  : await readFile(SPEC_URL, 'utf8');
const hash = createHash('sha256').update(JSON.stringify(JSON.parse(spec))).digest('hex');
const types = astToString(await openapiTS(JSON.parse(spec), { defaultNonNullable: false }));

if (process.argv[2] === 'check') {
  const current = await readFile(OUT, 'utf8').catch(() => '');
  if (current !== types) {
    console.error(
      `src/generated/api.ts no longer matches ${SPEC_URL}. Run npm run types:generate, review the change, and release.`,
    );
    process.exit(1);
  }
  console.log('Types match the published API.');
} else {
  await writeFile(OUT, types);
  await writeFile(HASH, `${hash}\n`);
  console.log(`Wrote src/generated/api.ts and openapi.sha256 from ${SPEC_URL}.`);
}
