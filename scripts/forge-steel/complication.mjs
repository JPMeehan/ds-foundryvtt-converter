/**
 * Parses a complication.
 * @param {object} source
 */
export default function parseComplication(source) {
  const foundryData = {
    name: source.name,
    type: "complication",
    system: {
      source: {
        book: "Heroes",
        license: "Draw Steel Creator License",
        revision: 1,
      },
      description: {
        value: `<p>${source.description}</p>`,
      },
    },
  };

  switch (source.features.length) {
    case 1:
      foundryData.system.description.value += `<p><strong>Benefit and Drawback:</strong> ${source.features[0].description}</strong>`;
      break;
    case 2:
      foundryData.system.description.value += `<p><strong>Benefit:</strong> ${source.features[0].description}</p><p><strong>Drawback:</strong> ${source.features[1].description}</p>`;
      break;
    default:
      foundryData.system.description.value += `<p><strong>Benefit:</strong> ${source.features.find(f => f.description).description}</p>`;
      foundryData.system.description.value += `<p><strong>Drawback:</strong> ${source.features.findLast(f => f.description).description}</p>`;
      console.log(source.name, source.features.length);
  }

  return foundryData;
}
