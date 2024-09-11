"use strict";

const nodeResolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");
// const babel = require("@rollup/plugin-babel");
// const { resolve } = require("node:path");

/** @type import('rollup').RollupOptions*/
module.exports = {
  input: "index.js",
  output:
    [
      {
        exports: "named",
        file: "dist/index.esm.js",
        format: "esm"
      },
      {
        exports: "named",
        file: "dist/index.cjs.js",
        format: "cjs"
      }
    ],
  plugins: [
    nodeResolve(),
    commonjs(),
    terser()
    // babel({
    //   babelHelpers: "bundled",
    //   include: [
    //     "index.js",
    //     "lib/**",
    //     /webidl-conversions/u
    //   ]
    // })
  ]
};


