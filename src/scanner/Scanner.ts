import fg from 'fast-glob';
import type Config from '../config/Config';

export default class Scanner
{
    private config: Config;

    public constructor(config: Config)
    {
        this.config = config;
    };

    public scan()
    {
        return fg.sync(
            this.config.source,
            {
                absolute: true,
                ignore: this.config.ignore,
            }
        );
    };
};
