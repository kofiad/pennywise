// Utility function to get the year and month as a key
export function getYearMonth(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}`; // Month is 0-indexed, so +1
  }

  // Function to calculate monthly totals
  export default function calculateMonthlySums(data = []) {
    if (!Array.isArray(data)) {
      console.error('Expected an array but received:', data);
      return {};  // Return an empty object if the data is not valid
    }

    return data.reduce((acc, curr) => {
      const monthKey = getYearMonth(curr.createdAt);
      if (!acc[monthKey]) {
        acc[monthKey] = 0;
      }
      acc[monthKey] += curr.amount;
      return acc;
    }, {});
  }

