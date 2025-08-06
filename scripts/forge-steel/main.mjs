// A script to convert abilities from the Forge Steel JSON to a Foundry-legible format
import * as fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { exit } from "process";
import parseAbility from "./ability.mjs";

if (!fs.existsSync("config.yaml")) exit(1);

const fc = await fs.promises.readFile("config.yaml", "utf-8");

const fileConfig = yaml.load(fc);

const fsfile = await fs.promises.readFile(fileConfig.forgeSteel);

const fsjson = JSON.parse(fsfile);

console.log(fsjson.classes.length);
for (const dscls of fsjson.classes) {
  const abilities = dscls.abilities.map(ability => parseAbility(ability));
  await fs.promises.writeFile(`results/forge-steel/${dscls.name}-abilities.json`, JSON.stringify(abilities, null, 2), { encoding: "utf8" });
}
