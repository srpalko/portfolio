// Keeps track of palindromes entered on page, and updates the list.

let palindromeArray = [];

// checks palindromeList and adds palindrome if not already in list
function updatePalindromeList(palindrome)
{
    if (!palindromeArray.includes(palindrome))
    {
        palindromeArray.push(palindrome);
    }
}

// creates a tagged list of results and displays on page
function updateResultDisplay()
{
    listArray = [];

    for (result in palindromeArray)
    {
        listArray.push(`<li>${palindromeArray[result]}</li>`)
    }

    $("#result-list").html(listArray.join(''));
}