import * as esbuild from 'esbuild'

let ctx =  await esbuild.context({
    entryPoints: ['src/app.jsx', 'src/icon-libraries.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outdir: 'dist',
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
})

if (process.argv[2] && process.argv[2] === '--watch') {
    await ctx.watch();
} else {
    await ctx.rebuild();
    process.exit(0);
}

