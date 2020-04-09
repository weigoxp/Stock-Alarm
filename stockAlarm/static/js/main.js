var today = new Date();
var dates = new Array();
var j = 0;
for (var i = 5; i >= 0; i--) {
    dates[j] = (today.getMonth()+1)+"/"+(today.getDate() - i)
    j++;
}

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "d720cffba4mshb373c712d83bb00p1d8f59jsn6e5704ee7048"
    }
}

$.ajax(settings).done(function (response) {
    var snp = response['marketSummaryResponse']['result'][0]
    document.getElementById('snp-name').innerHTML = snp['shortName']
    document.getElementById('snp').innerHTML = snp['regularMarketPrice']['fmt']
    document.getElementById('snpChg').innerHTML = snp['regularMarketChangePercent']['fmt']
    document.getElementById('snpSt').innerHTML = snp['marketState']

    var dji = response['marketSummaryResponse']['result'][1]
    document.getElementById('dow-name').innerHTML = dji['shortName']
    document.getElementById('dji').innerHTML = dji['regularMarketPrice']['fmt']
    document.getElementById('djiChg').innerHTML = dji['regularMarketChangePercent']['fmt']
    document.getElementById('djiSt').innerHTML = dji['marketState']

    var nasdaq = response['marketSummaryResponse']['result'][2]
    document.getElementById('nasdaq-name').innerHTML = nasdaq['shortName']
    document.getElementById('nasdaq').innerHTML = nasdaq['regularMarketPrice']['fmt']
    document.getElementById('nasdaqChg').innerHTML = nasdaq['regularMarketChangePercent']['fmt']
    document.getElementById('nasdaqSt').innerHTML = nasdaq['marketState']

    var russell = response['marketSummaryResponse']['result'][3]
    document.getElementById('russell-name').innerHTML = russell['shortName']
    document.getElementById('russell').innerHTML = russell['regularMarketPrice']['fmt']
    document.getElementById('russellChg').innerHTML = russell['regularMarketChangePercent']['fmt']
    document.getElementById('russellSt').innerHTML = russell['marketState']

    var ftse = response['marketSummaryResponse']['result'][14]
    document.getElementById('ftse-name').innerHTML = ftse['shortName']
    document.getElementById('ftse').innerHTML = ftse['regularMarketPrice']['fmt']
    document.getElementById('ftseChg').innerHTML = ftse['regularMarketChangePercent']['fmt']
    document.getElementById('ftseSt').innerHTML = ftse['marketState']

    var snpctx = document.getElementById('snp-chart').getContext('2d');
    var snpChart = new Chart(snpctx, {
        type: 'line',
        data: {
            labels: ["previous", "regular"],
            datasets: [{
                label: snp['shortName'],
                data: [
                    snp['regularMarketPreviousClose']['raw'],
                    snp['regularMarketPrice']['raw']
                ],
            }]
        }
    });
    var djictx = document.getElementById('dji-chart').getContext('2d');
    var djiChart = new Chart(djictx, {
        type: 'line',
        data: {
            labels: ["previous", "regular"],
            datasets: [{
                label: dji['shortName'],
                data: [
                    dji['regularMarketPreviousClose']['raw'],
                    dji['regularMarketPrice']['raw']
                ],
            }]
        }
    });
    var nasctx = document.getElementById('nasdaq-chart').getContext('2d');
    var nasChart = new Chart(nasctx, {
        type: 'line',
        data: {
            labels: ["previous", "regular"],
            datasets: [{
                label: nasdaq['shortName'],
                data: [
                    nasdaq['regularMarketPreviousClose']['raw'],
                    nasdaq['regularMarketPrice']['raw']
                ],
            }]
        }
    });
    var rusctx = document.getElementById('russell-chart').getContext('2d');
    var rusChart = new Chart(rusctx, {
        type: 'line',
        data: {
            labels: ["previous", "regular"],
            datasets: [{
                label: russell['shortName'],
                data: [
                    russell['regularMarketPreviousClose']['raw'],
                    russell['regularMarketPrice']['raw']
                ],
            }]
        }
    });
    var ftsctx = document.getElementById('ftse-chart').getContext('2d');
    var ftsChart = new Chart(ftsctx, {
        type: 'line',
        data: {
            labels: ["previous", "regular"],
            datasets: [{
                label: ftse['shortName'],
                data: [
                    ftse['regularMarketPreviousClose']['raw'],
                    ftse['regularMarketPrice']['raw']
                ],
            }]
        }
    });
});

var movers = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-movers?region=US&lang=en",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "d720cffba4mshb373c712d83bb00p1d8f59jsn6e5704ee7048"
    }
}

$.ajax(movers).done(function (response) {
    var result = response['finance']['result']

    var ga1 = result[0]
    document.getElementById('ga1').innerHTML = 
        ga1['quotes'][0]['symbol'] + " / " + ga1['quotes'][0]['fullExchangeName']
    var ga2 = result[0]
    document.getElementById('ga2').innerHTML = 
        ga2['quotes'][1]['symbol'] + " / " + ga2['quotes'][0]['fullExchangeName']
    var ga3 = result[0]
    document.getElementById('ga3').innerHTML = 
        ga3['quotes'][3]['symbol'] + " / " + ga3['quotes'][0]['fullExchangeName']
    var ga4 = result[0]
    document.getElementById('ga4').innerHTML = 
        ga4['quotes'][4]['symbol'] + " / " + ga4['quotes'][0]['fullExchangeName']
    var ga5 = result[0]
    document.getElementById('ga5').innerHTML = 
        ga5['quotes'][5]['symbol'] + " / " + ga5['quotes'][0]['fullExchangeName']

    var lo1 = result[1]
    document.getElementById('lo1').innerHTML = 
        lo1['quotes'][0]['symbol'] + " / " + lo1['quotes'][0]['fullExchangeName']
    var lo2 = result[1]
    document.getElementById('lo2').innerHTML = 
        lo2['quotes'][1]['symbol'] + " / " + lo2['quotes'][0]['fullExchangeName']
    var lo3 = result[1]
    document.getElementById('lo3').innerHTML = 
        lo3['quotes'][3]['symbol'] + " / " + lo3['quotes'][0]['fullExchangeName']
    var lo4 = result[1]
    document.getElementById('lo4').innerHTML = 
        lo4['quotes'][4]['symbol'] + " / " + lo4['quotes'][0]['fullExchangeName']
    var lo5 = result[1]
    document.getElementById('lo5').innerHTML = 
        lo5['quotes'][5]['symbol'] + " / " + lo5['quotes'][0]['fullExchangeName']

    var ma1 = result[2]
    document.getElementById('ma1').innerHTML = 
        ma1['quotes'][0]['symbol'] + " / " + ma1['quotes'][0]['fullExchangeName']
    var ma2 = result[2]
    document.getElementById('ma2').innerHTML =
        ma2['quotes'][1]['symbol'] + " / " + ma2['quotes'][0]['fullExchangeName']
    var ma3 = result[2]
    document.getElementById('ma3').innerHTML = 
        ma3['quotes'][3]['symbol'] + " / " + ma3['quotes'][0]['fullExchangeName']
    var ma4 = result[2]
    document.getElementById('ma4').innerHTML = 
        ma4['quotes'][4]['symbol'] + " / " + ma4['quotes'][0]['fullExchangeName']
    var ma5 = result[2]
    document.getElementById('ma5').innerHTML = 
        ma5['quotes'][5]['symbol'] + " / " + ma5['quotes'][0]['fullExchangeName']
});

function searchSymbol() {
    var symbol = document.getElementById('usr-input')

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "d720cffba4mshb373c712d83bb00p1d8f59jsn6e5704ee7048"
        }
    }
    settings["url"] = settings["url"] + symbol.value

    $.ajax(settings).done(function (response) {
        var result = response['quoteResponse']['result'][0]
        document.getElementById('symb').innerHTML = result['symbol']
        document.getElementById('prc').innerHTML = result['regularMarketPrice']
        document.getElementById('mkt').innerHTML = result['exchange']
        var priceChgUSD = result['regularMarketChange']
        var priceChgPer = result['regularMarketChangePercent']
        document.getElementById('prc-chg').innerHTML = 
            (priceChgUSD.toFixed(2)).toString() + "/" + (priceChgPer.toFixed(2)).toString() + "%"
        document.getElementById('52-weeks-range').innerHTML = result['fiftyTwoWeekRange']
        var element = document.createElement("input");
        element.setAttribute("type", "button");
        element.setAttribute("class", "btn btn-info");
        element.setAttribute("value", "Add");
        element.setAttribute("onclick", "addToWatchlist();");
        var btn = document.getElementById('add-btn');
        btn.replaceChild(element, btn.childNodes[0]);
    });
}

function addToWatchlist() {
    var watchlistBody = document.getElementById("watchlist-body");
    var row = watchlistBody.insertRow(-1);
    var removeOptionCell = row.insertCell(0);
    var symCell = row.insertCell(1);
    symCell.innerHTML = document.getElementById('symb').innerHTML;
    row.setAttribute("id", symCell.innerHTML);
    var prcCell = row.insertCell(2);
    prcCell.innerHTML = document.getElementById('prc').innerHTML; 
    var mktCell = row.insertCell(3);
    mktCell.innerHTML = document.getElementById('mkt').innerHTML; 
    var rangeCell = row.insertCell(4);
    rangeCell.innerHTML = document.getElementById('52-weeks-range').innerHTML; 
    var mktChgCell = row.insertCell(5);
    mktChgCell.innerHTML = document.getElementById('prc-chg').innerHTML; 
    var openNavBtnCell = row.insertCell(6);
    // Open notification settings.
    var element1 = document.createElement("input");
    element1.setAttribute("type", "button");
    element1.setAttribute("class", "btn btn-info");
    element1.setAttribute("value", "Add");
    element1.setAttribute("onclick", "openNav()");
    openNavBtnCell.appendChild(element1);
    // Remove target from the watchlist.
    var element2 = document.createElement("input");
    element2.setAttribute("type", "button");
    element2.setAttribute("class", "btn btn-danger");
    element2.setAttribute("value", "Remove");
    element2.setAttribute("onclick", "remove('"+symCell.innerHTML+"');");
    removeOptionCell.appendChild(element2);
}

function remove(target) {
    var rmvTarget = document.getElementById(target);
    rmvTarget.remove();
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
