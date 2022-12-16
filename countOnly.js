/* This function should take in a collection of items and return counts
for a specific subset of those items. It won't count everything. In order to decide what to count,
it will also be given an idea of which items we care about and it will only count those, ignoring the others.
*/
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;