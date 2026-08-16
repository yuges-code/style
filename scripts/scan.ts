#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import conf from '../styles.config.ts';
import { createRequire } from 'module';
import extractor from '../src/extractor/';

const require = createRequire(import.meta.url);

const paths = {
    config: path.resolve(process.cwd(), 'styles.config.ts'),
};

const config = fs.existsSync(paths.config)
    ? require(paths.config)?.default
    : conf;


function scan() {
    const { content = [], ignore = [] } = config;

    const files = fg.sync(content, { absolute: true, ignore: ignore });

    const foundClasses = new Set();

    for (const file of files) {
        const type = path.extname(file).slice(1);
        const content = fs.readFileSync(file, 'utf8');

        extractor.extract(content, type).forEach(cls => foundClasses.add(cls));
    }

}

scan();
