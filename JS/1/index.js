
function datefilter(value, format = 'date')
{
    const options = {

    };

    if (format.includes('date')) {
        options.day = '2-digit'
        options.month = 'long'
        options.year = 'numeric'
    }
    
    if (format.includes('time')) {
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.second = '2-digit'
    }
    let newDate = Intl.DateTimeFormat('ru-Ru', options).format(new Date(value));
    document.getElementById("time").innerHTML = newDate;
}

setInterval(() => datefilter(new Date(), 'datetime'), 2000)


