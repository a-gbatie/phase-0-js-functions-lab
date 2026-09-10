//Function 1: Calculate 10% Tax
function calculateTax(price) {
  return price * 0.10;
}

//Function 2: Convert String to Uppercase
function convertToUpperCase(str) {
  return str.toUpperCase();
}

//Function 3: Find The Larger Of Two Numbers
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//Function 4: Check If Word Is A Palindrome
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
        return true;
    } else {
        return false;
    }
}

//Function 5: Calculate Discounted Price
function calculateDiscountedPrice(price, discount) {
    const discountedAmount = price * (discount / 100);
    const total = price - discountedAmount;

    if (discount === 0) {
        return price;
    } else {
        return total;
    }
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };