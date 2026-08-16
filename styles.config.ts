import type { StylesConfig } from "./src/types/StylesConfig";

export default {
    source: [
        './**/*.{vue,html,js,ts}',

        '!**/node_modules/!(@yuges)/**',
        '!**/node_modules/@yuges/!(vue-ui)/**',
    ],
    safelist: [
        'hidden',
        'absolute',
        'inset-0',
        /^bg-/,
    ],
    ignore: [
        '**/*.d.ts',
        '**/__tests__/**',
        '**/*.test.{js,jsx}',
        // '**/node_modules/**',
    ],
      // Настройки темы (дизайн-токены)
    // theme: {
    //     colors: { /* ... */ },
    //     spacing: { /* ... */ }
    // }
} satisfies StylesConfig;
