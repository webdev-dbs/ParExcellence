import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { build, context } from "esbuild";

const watch = process.argv.includes("--watch");
const projectRoot = process.cwd();
const outputDirectory = resolve(projectRoot, "dist");

const options = {
  absWorkingDir: projectRoot,
  entryPoints: [
    resolve(projectRoot, "src/parexcellence.css"),
    resolve(projectRoot, "src/parexcellence.js"),
  ],
  bundle: true,
  minify: !watch,
  sourcemap: watch,
  outdir: outputDirectory,
  entryNames: "[name]",
  legalComments: "none",
  logLevel: "info",
};

await rm(outputDirectory, { recursive: true, force: true });

if (watch) {
  const buildContext = await context(options);
  await buildContext.watch();
  console.log("Watching src for changes...");
} else {
  await build(options);
}
