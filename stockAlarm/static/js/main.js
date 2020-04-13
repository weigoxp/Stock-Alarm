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
        "x-rapidapi-key": "b8232ea744msh9c8f6f7486e4e2bp11c68bjsn4b526dfea2b8"
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

var news = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&category=%255EDJI",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "b8232ea744msh9c8f6f7486e4e2bp11c68bjsn4b526dfea2b8"
	}
}

$.ajax(news).done(function (response) {
    console.log(response)
    var items = response["items"]["result"]
    var news_div = document.getElementById("news");
    var header = document.createElement("h3");
    var text = document.createTextNode("Latest Market Headlines");
    header.setAttribute("class", "text-body");
    header.appendChild(text);
    news_div.appendChild(header);

    var i;
    for (i = 0; i < 6; i++) {
        var a = document.createElement("a");
        var link = document.createTextNode("<" + items[i]["title"] + ">");
        var br = document.createElement('br');
        a.appendChild(link);
        a.href = items[i]["link"];
        a.appendChild(br);
        news_div.appendChild(a);
    }
});

var movers = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-movers?region=US&lang=en",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "b8232ea744msh9c8f6f7486e4e2bp11c68bjsn4b526dfea2b8"
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
            "x-rapidapi-key": "b8232ea744msh9c8f6f7486e4e2bp11c68bjsn4b526dfea2b8"
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
    prcCell.setAttribute("id", "id_prc_"+symCell.innerHTML);
    var mktCell = row.insertCell(3);
    mktCell.innerHTML = document.getElementById('mkt').innerHTML; 
    var rangeCell = row.insertCell(4);
    rangeCell.innerHTML = document.getElementById('52-weeks-range').innerHTML; 
    var mktChgCell = row.insertCell(5);
    mktChgCell.innerHTML = document.getElementById('prc-chg').innerHTML; 
    mktChgCell.setAttribute("id", "id_chg_"+symCell.innerHTML);
    var openNavBtnCell = row.insertCell(6);
    var element1 = document.createElement("img");
    var element1 = document.createElement("input");
    element1.setAttribute("type", "button");
    element1.setAttribute("class", "btn btn-info ml-4");
    element1.setAttribute("id", "btn_noti_"+symCell.innerHTML);
    element1.setAttribute("value", "Setting");
    element1.setAttribute("onclick", "openNav(this)");
    openNavBtnCell.appendChild(element1);
    // Remove target from the watchlist.
    var element2 = document.createElement("input");
    element2.setAttribute("type", "button");
    element2.setAttribute("class", "btn btn-danger btn-xm");
    element2.setAttribute("value", "Remove");
    element2.setAttribute("id", "btn_rev_"+symCell.innerHTML);
    element2.setAttribute("onclick", "remove('"+symCell.innerHTML+"');");
    removeOptionCell.appendChild(element2);
}

function remove(target) {
    var rmvTarget = document.getElementById(target);
    rmvTarget.remove();
}

function openNav(elem) {
    document.getElementById("myNav").style.height = "100%";
    var btn_elem = document.getElementById("openNav");
    btn_elem.name = "id_"+elem.id.slice(9);
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    // Reset name back to default id - "temp_name".
    document.getElementById("openNav").name = "temp_name";
}

function notification(current_elem) {
    var current_name = current_elem.name.slice(3);
    var current_price = Number(document.getElementById("id_prc_"+current_name).innerHTML);
    var current_price_chg = document.getElementById("id_chg_"+current_name).innerHTML;
    var arr = current_price_chg.split('/');
    var usd = Number(arr[0]);
    var perc = Number(arr[1].slice(0,-1));

    var original_price = current_price + usd;

    var increase_price = Number(document.getElementById("id_increase_to").value);
    if (increase_price && current_price >= increase_price) {
        push("inc", current_price, current_name, current_price, original_price);
    }
    var decrease_price = Number(document.getElementById("id_decrease_to").value);
    if (decrease_price && current_price <= decrease_price) {
        push("dec", current_price, current_name, current_price, original_price);
    }
    var increase_by = Number(document.getElementById("id_increase_by").value);
    if (increase_by && perc >= increase_by) {
        push("inc_%", perc, current_name, current_price, original_price);
    }
    var decrease_by = Number(document.getElementById("id_decrease_by").value);
    if (decrease_by && perc >= decrease_by) {
        push("dec_%", perc, current_name, current_price, original_price);
    }
}

function push(stat, msg, symbol, price, org){
    formed_msg = "Symbol: " + symbol + "; ";
    body_msg = "Original Price: " + org.toString() + "\n";

    if (stat == "inc") {
        formed_msg = formed_msg + "Price increased to " + msg.toString();
    }
    else if (stat == "dec") {
        formed_msg = formed_msg + "Price decreased to " + msg.toString();
    }
    else if (stat == "inc_%") {
        formed_msg = formed_msg + "Price increased by " + msg.toString() + "%";
        body_msg = body_msg + "; Current Price: " + price.toString() + "\n";
    }
    else if (stat == "dec_%") {
        formed_msg = formed_msg + "Price decreased by " + msg.toString() + "%";
        body_msg = body_msg + "; Current Price: " + price.toString() + "\n";
    }

    Push.create(formed_msg.toString(),{
        body: body_msg,
        icon: '/Logo_small.png',
        timeout: 10000,
        onClick: function () {
            window.focus();
            this.close();
        }
    });
};
