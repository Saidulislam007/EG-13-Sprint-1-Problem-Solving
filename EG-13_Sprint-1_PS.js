// 01. Check if a Year is a Leap Year
/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// 02. Generate Fibonacci Sequence Up to N Terms
/**
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
  const fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }

  return fibonacci;
}

// 03. Calculate the Greatest Common Divisor (GCD)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

// 04. Calculate the Least Common Multiple (LCM)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  return (a / findGCD(a, b)) * b;
}

// 05. Check if a Number is Prime
/**
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let divisor = 3; divisor <= Math.sqrt(num); divisor += 2) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
}

// 06. Merge Two Sorted Arrays into One Sorted Array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < arr1.length && secondIndex < arr2.length) {
    if (arr1[firstIndex] <= arr2[secondIndex]) {
      merged.push(arr1[firstIndex]);
      firstIndex++;
    } else {
      merged.push(arr2[secondIndex]);
      secondIndex++;
    }
  }

  while (firstIndex < arr1.length) {
    merged.push(arr1[firstIndex]);
    firstIndex++;
  }

  while (secondIndex < arr2.length) {
    merged.push(arr2[secondIndex]);
    secondIndex++;
  }

  return merged;
}

// 07. Find the Median of an Unsorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNums.length / 2);

  if (sortedNums.length % 2 === 0) {
    return (sortedNums[middleIndex - 1] + sortedNums[middleIndex]) / 2;
  }

  return sortedNums[middleIndex];
}

// 08. Find the Second Largest Number in an Array
/**
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// 09. Find Most Frequent Element (Mode) in an Array
/**
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr) {
  if (arr.length === 0) {
    return null;
  }

  const frequencies = new Map();
  let mode = arr[0];
  let highestFrequency = 0;

  for (const element of arr) {
    const currentFrequency = (frequencies.get(element) || 0) + 1;
    frequencies.set(element, currentFrequency);

    if (currentFrequency > highestFrequency) {
      highestFrequency = currentFrequency;
      mode = element;
    }
  }

  return mode;
}

/**
 * @param {string[]} arr
 * @return {string[]}
 */
function naturalSort(arr) {
  return [...arr].sort((a, b) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );
}