/**

2026 Winter Games Day 14: Ski Mountaineering

Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".
Return "Safe" or "Risky" based on this table:

"Shallow"	"Moderate"	"Deep"
"Gentle"	"Safe"	"Safe"	"Safe"
"Steep"	"Safe"	"Risky"	"Risky"
"Very Steep"	"Safe"	"Risky"	"Risky"

*/

function avalancheRisk(snowDepth, slope) {
  const table = {
    Gentle: { Shallow: 'Safe', Moderate: 'Safe', Deep: 'Safe' },
    Steep: { Shallow: 'Safe', Moderate: 'Risky', Deep: 'Risky' },
    'Very Steep': { Shallow: 'Safe', Moderate: 'Risky', Deep: 'Risky' },
  };

  return table[slope][snowDepth];
}
