import fs from 'fs';
// import url from 'url';
import path from 'path';
import ParserTs from '@yuges/parser-ts';
import Config from '../src/config/Config';
import Scanner from '../src/scanner/Scanner';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const content =
// `
//     <section lol="kek " kek='lol'>
//         <div>
//             <a></a>
//             <span></span>
//         </div>
//     </section>
//     <div></div>
// `;

const config = new Config();
const scanner = new Scanner(config);

console.log(scanner.scan());

process.exit();

var content =
`
    <div lol=="kek" class="d-flex" lol=kek>
        <a href="kek.com"></a>
    </div>
    <!-- фывфыыфаыв -->
    <img/>
    lolkek
    <script>
        var lol = 'kek';
    </script>
`;

content = `
    <script>

        if (true) {
            const fn = (number) => { number * 4 };
        } else if (false) {
            if (4+6) {
                const d= 3;
            }
        } else {
            
        }
    </script>
`;

const parsed = ParserTs.parse(content, 'html');

console.log(parsed.root.children);

fs.writeFileSync(path.resolve(process.cwd(), './parsed.json'), JSON.stringify(parsed.root.toArray(), undefined, '  '));
