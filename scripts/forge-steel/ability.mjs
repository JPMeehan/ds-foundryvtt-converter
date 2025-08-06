/**
 * Parses an ability from a class's abilities array.
 * @param {object} source
 */
export default function parseAbility(source) {
  const sourceData = {
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
      trigger: "",
      distance: {

      },
      target: {

      },
    },
  };

  return sourceData;
}
