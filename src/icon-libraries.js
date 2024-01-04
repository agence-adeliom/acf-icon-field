import { setBasePath, registerIconLibrary } from '@agence-adeliom/awc';
setBasePath('https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@latest/dist/');
window.acf_icons = window.acf_icons ?? [];
window.acf_icons.forEach((library) => {
    registerIconLibrary(library.library, {
        resolver: (name) => {
            let filename = name, subset = '', path = library?.resolver ?? '';
            for (const subsetName in library?.subsets ?? {}) {
                const prefix = library.subsets[subsetName].prefix ?? null;
                if(prefix){
                    filename = filename.replace(`${prefix}-`, '');
                    if (name.startsWith(`${prefix}-`)) subset = subsetName
                }
            }
            path = path
                .replaceAll('{{assetPath}}', window.acf_icon_theme.uri)
                .replaceAll('{{library}}', library.library)
                .replaceAll('{{subset}}', subset)
                .replaceAll('{{name}}', filename);

            return path;
        },
        mutator: svg => svg.setAttribute('fill', 'currentColor'),
        spriteSheet: library?.spritesheet ?? false
    });
})