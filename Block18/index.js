//TESTS -- it doesn't say we need to write code...so don't judge me if that's wrong 

// 1. Multiplication function (A function called "multiplication" that returns the product of the two input numbers.)
// Expect multiply(2, 3) to be a number
// Expect multiply(2, 3) to be equal to 6
// Expect multiply("tom", 37) to be an error
// Expect multiply(3, 10) to be equal to 30
// Expect multiply(0, 60) to be equal to 0
// Expect multiply(-4, 4) to be equal to -16
// Expect multiply(1, 7) to be equal to 7
// Expect multiply('true', 'false') to be an error


//2.concatOdds function ( takes two arrays of integers as arguments. 
//It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.)
// Expect concatOdds([1, 1, 1], [1, 1, 1, 1, 1, 1, -1]) should result in [-1, 1]
// Expect concatOdds([2, 4, 6], [8, -5, 0, 9, -37, 10, 22, -12]) should result in [-37, -5, 9]
// Expect concatOdds([159, 7, -4], [58, -63, 4, 6, 19]) should result in [-63, 7, 19, 159]
// Expect concatOdds(["true", 58, "tacos"], ["true", "Bobby", 745, -309, "ketchup",]) should result in [-309,745]


//3. Functional Tests..
//A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. 
//They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
//When a user clicks "Cart" and it's empty, they should be shown "cart is empty" message, with sign in button for existing accounts.
//When a user clicks "Cart" and it has items, they should be shown a sign in button and a check in as a guest button.
//When a user clicks "Check in as a guest" they should be taken to the information input page, with create an account button option at the top.
//When a user clicks "Sign in" they should be taken to a prefilled confirmation page, with option to delete items in cart or to edit, update info. 
//When a user clicks "Payment" without filling in any information, they should be shown an error and prompted to fill the required empty sections.
//When a user clicks "Payment" with proper information, they should be shown Paypal and Klarna options along with Gift Card and Credit/Debit card options.
//When a user clicks "Confirm" without choosing and updating payment info, they should be shown an error and prompted to fill the required empty sections.
//When a user clicks "Confirm" , if an external payment site chosen, they should be redirected to site.
//When a user does not confirm in external site or an error occurs, they should be taken back to the payment section to choose a payment option.
//When a user clicks "Confirm", if an internal payment method is entered, they should be redirected to confirmation site.
//When a user has confirmed, web page should show confirmation info and have buttons for "continue shopping", "create and account" and " cancel order".




