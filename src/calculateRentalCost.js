/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const costForAllDay = costPerDay * days;
  const saleForThreeDays = 20;
  const saleForSevenDays = 50;

  if (days >= 7) {
    return costForAllDay - saleForSevenDays;
  } else if (days >= 3) {
    return costForAllDay - saleForThreeDays;
  } else {
    return costForAllDay;
  }
}

module.exports = calculateRentalCost;
