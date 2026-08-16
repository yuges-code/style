import fs from 'fs';
import path from "path";
import { createRequire } from 'module';
import config from '../../styles.config.ts';
import type { StylesConfig } from '../types/StylesConfig.ts';

export default class Config
{
    private data: StylesConfig;

    public source: string[] = [];
    public ignore: (string)[] = [];
    public safelist: (string | RegExp)[] = [];

    public constructor(file: string | null = null)
    {
        if (file) {
            const paths = {
                config: path.resolve(process.cwd(), file),
            };

            const require = createRequire(import.meta.url);

            this.data = fs.existsSync(paths.config)
                ? require(paths.config)?.default
                : config;
        } else {
            this.data = config;
        }

        this.distribute();
    };

    public distribute()
    {
        this.source = this.data.source;
        this.ignore = this.data.ignore;
        this.safelist = this.data.safelist;
    };

    public get()
    {
        return this.data;
    };
};
