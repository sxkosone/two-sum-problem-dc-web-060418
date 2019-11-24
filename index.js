const bruteForceTwoSum = (array, sum) => {
  pairs = []
  for (let i = 0; i < array.length; i++) {
    number = array[i]
    match = array
      .slice(i + 1)
      .find((matchingNumber) => matchingNumber + number === sum);
    if (match) {
      pairs.push([number, match]);
    }
  }

  return pairs;
}

const binarySearchTwoSum = (array, sum) => {
  const sortedArray = array.sort((a, b) => a - b)
  const indexOfSum = sortedArray.indexOf(sum)
  const truncArray = sortedArray.slice(0, indexOfSum);
  const onlyFirstHalf = truncArray.slice(0, Math.ceil(truncArray.length / 2))
  const pairs = []

  onlyFirstHalf.forEach((number) => {
    const missingNumber = sum - number;

    if (binaryMatch(truncArray, missingNumber)) {
      pairs.push([number, missingNumber]);
    }
  })
  return pairs;
}

const binaryMatch = (sortArray, missingNumber) => {
  let lowIndex = 0
  let highIndex = sortArray.length - 1;

  while(lowIndex <= highIndex) {
    const midPoint = Math.floor((lowIndex + highIndex) / 2)
    const guess = sortArray[midPoint]

    if (guess === missingNumber) {
      return true;
    } else if (guess > missingNumber) {
      highIndex = midPoint - 1;
    } else if (guess < missingNumber){
      lowIndex = midPoint + 1;
    }
  }

  return false
}

const hashTwoSum = (array, sum) => {

}
