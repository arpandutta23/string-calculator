function add(input) {
  if (!input) return 0;

  let delimiter = /,|\n/;

  if (input.startsWith("//")) {
    const [delimiterLine, numbersLine] = input.split("\n");
    const customDelimiter = delimiterLine.slice(2);
    const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    delimiter = new RegExp(escapedDelimiter);
    input = numbersLine;
  }

  const numbers = input.split(delimiter).map(Number);
  const negatives = numbers.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed " + negatives.join(","));
  }

  return numbers.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };


