/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentday = 40;

  if (days < 3) {
    return rentday * days;
  } else if (days <= 6) {
    return rentday * days - 20;
  } else if (days >= 7) {
    return rentday * days - 50;
  }
}

module.exports = calculateRentalCost;
