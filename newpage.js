function clock() 
{
    var date = new Date();
    var weekDay = date.getDay();
    var month = date.getMonth()+1;
    var monthDay = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var daySyntax;

    var weekDays = 
    [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    var months = 
    [
		"January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    function makeTimeStampReadable() 
    {
        if (minute < 10) 
        {
            minute = "0" + minute;
        }
        if (second < 10) 
        {
            second = "0" + second;
        }

        weekDay = weekDays[weekDay];
        month = months[month - 1];

        if (monthDay === 1 || monthDay === 21 || monthDay === 31)
        {
            daySyntax = "st";
        }
        else if (monthDay === 2 || monthDay === 22)
        {
            daySyntax = "nd";
        }
        else if (monthDay === 3 || monthDay === 23)
        {
            daySyntax = "rd";
        }
        else 
        {
            daySyntax = "th";
        }
    }

    function updateTime() 
    {
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("second").innerHTML = second;

        document.getElementById("weekDay").innerHTML = weekDay;
        document.getElementById("month").innerHTML = month;
        document.getElementById("monthDay").innerHTML = monthDay;
        document.getElementById("daySyntax").innerHTML = daySyntax;
    }

    makeTimeStampReadable();
    updateTime();
}
setInterval(function(){ clock(); }, 1000);