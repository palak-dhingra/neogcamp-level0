function reverseStr(inputStr){
    return inputStr.split("").reverse().join("")
}

function isPalindrome(inputStr){
    if(inputStr === reverseStr(inputStr)){
        return true;
    }

    return false;
}

function numberToStr(dateInput){
    if(dateInput.day < 10){
        day = '0' + dateInput.day;
    }else{
        day = dateInput.day.toString();
    }

    if(dateInput.month < 10){
        month = '0' + dateInput.month;
    }else{
        month = dateInput.month.toString();
    }
    
    year = dateInput.year.toString();
    
    return {
        day : day,
        month : month,
        year : year
    }
}

function dateVariations(dateInput){
    var dateInputStr = numberToStr(dateInput)

    var ddmmyyyy = dateInputStr.day + dateInputStr.month + dateInputStr.year 
    var mmddyyyy = dateInputStr.month + dateInputStr.day + dateInputStr.year
    var yyyymmdd = dateInputStr.year + dateInputStr.month + dateInputStr.day
    var ddmmyy = dateInputStr.day + dateInputStr.month + dateInputStr.year.slice(-2)
    var mmddyy = dateInputStr.month + dateInputStr.day + dateInputStr.year.slice(-2)
    var yymmdd = dateInputStr.year.slice(-2) + dateInputStr.month + dateInputStr.day
    
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkPalidromeForAllDateVariations(dateInput){
    var variations = dateVariations(dateInput)
    
    for(v of variations){
        if(isPalindrome(v)){
            return true;
        }
    }

    return false;
}
function isLeapYear(year){
    if(year % 400 ===0){
        return true;
    }
    if(year % 4 ===0 ){
        return true;
    }
    return false;
}

function nextDate(dateInput){
    day = dateInput.day + 1
    month = dateInput.month
    year = dateInput.year;

    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(month == 2){
        if(isLeapYear(year)){
            if(day > 29){
                month+=1;
                day = 1
            }
        }else{
            if(day > daysInMonths[month - 1]){
                month +=1;
                day = 1;
            }
        }
    }else{
        if(day > daysInMonths[month -1]){
            day = 1;
            month +=1;
        }
    }

    if(month > 12){
        month = 1;
        year += 1;
    }

    return {
        day : day,
        month : month,
        year : year
    }
}

function nextPalindromeDate(dateInput){
    var days = 0
    var nextDateValue = nextDate(dateInput); 
    while(1){    
        days +=1;
        if(checkPalidromeForAllDateVariations(nextDateValue)){
            break;
        }
        nextDateValue = nextDate(nextDateValue)
    }
    return [days, nextDateValue]
}

function previousDate(dateInput){
    day  = dateInput.day-1;
    month = dateInput.month;
    year = dateInput.year
    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(month === 3){
        if(isLeapYear(year)){
            if(day<1){
                month -= 1;
                day = 29
            }
        }else{
            if(day<1){
                month -=1;
                day = daysInMonths[month - 1]
            }
        }
    }else{
        if(day < 1){
            month -=1;
            day = daysInMonths[month -1]
        }
    }

    if(month <1){
        month = 12;
        year -=1
        day = daysInMonths[month -1]
    }

    return {
        day : day,
        month : month, 
        year : year
    }
}

function previousPalindromeDate(dateInput){
    var days = 0;
    var previousDateValue = previousDate(dateInput);
    while(1){
        days +=1;
        if(checkPalidromeForAllDateVariations(previousDateValue)){
            break;
        }
        previousDateValue = previousDate(previousDateValue)
    }

    return [days, previousDateValue]
}

var dateInput = {
    day : 22,
    month : 12,
    year : 2021
}

function latestPalidrome(dateInput){
    var previousCount = previousPalindromeDate(dateInput)
    var nextCount = nextPalindromeDate(dateInput);
    if(previousCount[0] < nextCount[0]){
        return previousCount
    }
    return nextCount
}


var inputBDate = document.querySelector("#input-bdate")
var btnCheck = document.querySelector("#btn-check")
var result = document.querySelector("#result")

function checkBdayPalindrome(){
    var dateInput = inputBDate.value;
    if(dateInput){
        var splitDate = dateInput.split("-")
        dateInputFormat = {
            day : Number(splitDate[2]),
            month : Number(splitDate[1]),
            year : Number(splitDate[0])
        }

        if(checkPalidromeForAllDateVariations(dateInputFormat)){
            result.innerText = "yeppie your bday is a palindrome 🧁 "
        }
        else{
            nearestPalindrome = latestPalidrome(dateInputFormat)
            nearestDateStr = nearestPalindrome[1]
            nearestDate = `${nearestDateStr.day}-${nearestDateStr.month}-${nearestDateStr.year}`
            days = nearestPalindrome[0]
            result.innerText = `The nearest palindrome date is ${nearestDate}, you missed the palindrome date by ${days} days.`
        }

    }
}


btnCheck.addEventListener("click", checkBdayPalindrome)
