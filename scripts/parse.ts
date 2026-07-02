import fs from 'fs';
// import url from 'url';
import path from 'path';
import parser from "../src/parser/";

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
        const fn = (number) => { number * 4 };
    </script>
`;

const parsed = parser.parse(content, 'html');

console.log(parsed.root.children);

fs.writeFileSync(path.resolve(process.cwd(), './parsed.json'), JSON.stringify(parsed.root.toArray(), undefined, '  '));
