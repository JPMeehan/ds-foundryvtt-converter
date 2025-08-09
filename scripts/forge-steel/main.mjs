// A script to convert abilities from the Forge Steel JSON to a Foundry-legible format
import * as fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { exit } from "process";
import parseAbility from "./ability.mjs";
import parseComplication from "./complication.mjs";

if (!fs.existsSync("config.yaml")) exit(1);

const fc = await fs.promises.readFile("config.yaml", "utf-8");

const fileConfig = yaml.load(fc);

const fsfile = await fs.promises.readFile(fileConfig.forgeSteel);

const fsjson = JSON.parse(fsfile);

for (const dscls of fsjson.classes) {
  const classDir = path.join("results", "forge-steel", dscls.name.toLowerCase());
  if (!fs.existsSync(classDir)) await fs.promises.mkdir(classDir, { recursive: true });
  const abilities = dscls.abilities.map(ability => parseAbility(ability));
  await fs.promises.writeFile(path.join(classDir, "abilities.json"), JSON.stringify(abilities, null, 2), { encoding: "utf8" });
}
const complications = fsjson.complications.map(complication => parseComplication(complication));
await fs.promises.writeFile(path.join("results", "forge-steel", "complications.json"), JSON.stringify(complications, null, 2), { encoding: "utf8" });
