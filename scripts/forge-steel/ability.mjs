/**
 * Parses an ability from a class's abilities array.
 * @param {object} source
 */
export default function parseAbility(source) {
  const foundryData = {
    name: source.name,
    type: "ability",
    system: {
      source: {
        book: "Heroes",
        license: "Draw Steel Creator License",
        revision: 1,
      },
      keywords: source.keywords.map(k => k.toLowerCase()),
      type: "",
      trigger: source.type.trigger,
      distance: {

      },
      target: {

      },
    },
  };

  switch (source.type.usage) {
    case "Main Action":
      foundryData.system.type = "main";
      break;
    case "Maneuver":
      foundryData.system.type = source.type.free ? "freeManeuver" : "maneuver";
      break;
    case "Triggered Action":
      foundryData.system.type = source.type.free ? "freeTriggered" : "triggered";
      break;
  }

  return foundryData;
}
