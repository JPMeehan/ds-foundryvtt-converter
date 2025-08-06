// A script to convert abilities from the Forge Steel JSON to a Foundry-legible format
import * as fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { exit } from "process";

if (!fs.existsSync("config.yaml")) exit(1);

const fc = await fs.promises.readFile("config.yaml", "utf-8");

const fileConfig = yaml.load(fc);

const fsfile = await fs.promises.readFile(fileConfig.forgeSteel);

const fsjson = JSON.parse(fsfile);

console.log(fsjson.name);
