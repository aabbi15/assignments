/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  transactions.forEach(transaction => {
    const category = transaction.category;
    const price = transaction.price;

    const categoryObject = result.find(obj => obj.category === category);

    if (categoryObject) {
      categoryObject.totalSpent += price;
    } else {
      result.push({ category: category, totalSpent: price });
    }
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
