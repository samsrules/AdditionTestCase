export function add(numbers) {
  if (numbers === "") {
      return 0;
  }

  if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      const delimiter = numbers.substring(2, delimiterIndex);
      const normalizedNumbers = numbers
          .substring(delimiterIndex + 1)
          .replace(new RegExp(`\\${delimiter}`, 'g'), ',');
      numbers = normalizedNumbers;
  }

  // Replace new lines with commas
  numbers = numbers.split("");
  console.log(numbers)
  numbers = numbers.filter((v)=>{
    if(!isNaN(v)){
      return v;
    }
  }).join(',');

  // Split by commas and process numbers
  const numArray = numbers.split(',').map(num => parseInt(num, 10));
  const negatives = numArray.filter(num => num < 0);

  if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
