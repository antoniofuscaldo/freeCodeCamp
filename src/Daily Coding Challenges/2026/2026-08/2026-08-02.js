/**

Food Chain

Given an array of [predator, prey] pairs, return the food chain from the apex predator down to the bottom.

The apex predator is the animal that is never prey to another animal.
Return the chain as an array of strings.

Tests:
Waiting:1. getFoodChain([["cat", "mouse"]]) should return ["cat", "mouse"].
Waiting:2. getFoodChain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"].
Waiting:3. getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"].
Waiting:4. getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"].
Waiting:5. getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].

*/

export function getFoodChain(pairs) {
  const preyOf = new Map();
  const allPrey = new Set();

  for (const [pred, prey] of pairs) {
    preyOf.set(pred, prey);
    allPrey.add(prey);
  }

  let apex = null;
  for (const [pred] of pairs) {
    if (!allPrey.has(pred)) {
      apex = pred;
      break;
    }
  }

  const chain = [apex];
  while (preyOf.has(chain[chain.length - 1])) {
    chain.push(preyOf.get(chain[chain.length - 1]));
  }

  return chain;
}
