let $_5RJ4LP1G = {
    '$_CYR8LI0N': undefined,
    '$_1XO89RK4': undefined,
    '$_MWD148JF': undefined,
    '$_LVNIH45L': undefined,
    '$_7Y6NLT0Y': undefined,
    '$_L0GUQSGZ': undefined,
    '$_E96KMTE6': undefined,
    '$_2QH4UB1O': undefined,
    '$_HORN6PVO': undefined,
    '$_Y32QFSXS': undefined,
    '$_Q5VYL7MO': undefined,
    '$_7MNKTL6K': undefined,
    '$_I4A36C0K': undefined,
    '$_3C3VQKEZ': undefined,
    '$_6RIN2ERG': undefined,
    '$_QTRBLTPX': undefined,
    '$_5G5SCKVP': undefined,
    '$_63B4Z8ZZ': undefined,
};
let _frame = document.createElement('iframe');
_frame.tabIndex = '-1';
_frame.height = 0;
_frame.width = 0;
_frame.srcdoc = '<html><head></head><body><div id=v1>aaaa</div><div id=v2>bbbb</div><div id=v3>cccc</div><div id=v4>dddd</div><div id=v5>eeee</div></body></html>';
_frame.onload = function () {
    let $_OD4MAA = []
    for (let v1 = 1; v1 < 6; v1++) {
        $_OD4MAA.push(_frame.contentDocument.getElementById('v' + v1).getClientRects())
    }
    $_5RJ4LP1G['$_CYR8LI0N'] = _frame.contentWindow.navigator.appCodeName;
    $_5RJ4LP1G['$_1XO89RK4'] = _frame.contentWindow.navigator.appName;
    $_5RJ4LP1G['$_MWD148JF'] = _frame.contentWindow.navigator.appVersion;
    $_5RJ4LP1G['$_LVNIH45L'] = _frame.contentWindow.navigator.language;
    $_5RJ4LP1G['$_7Y6NLT0Y'] = _frame.contentWindow.navigator.languages;
    $_5RJ4LP1G['$_L0GUQSGZ'] = _frame.contentWindow.navigator.platform;
    $_5RJ4LP1G['$_E96KMTE6'] = _frame.contentWindow.navigator.product;
    $_5RJ4LP1G['$_2QH4UB1O'] = _frame.contentWindow.navigator.productSub;
    $_5RJ4LP1G['$_HORN6PVO'] = _frame.contentWindow.navigator.userAgent;
    $_5RJ4LP1G['$_Y32QFSXS'] = _frame.contentWindow.navigator.maxTouchPoints;
    $_5RJ4LP1G['$_Q5VYL7MO'] = _frame.contentWindow.navigator.mimeTypes.length;
    $_5RJ4LP1G['$_7MNKTL6K'] = _frame.contentWindow.navigator.webdriver;
    $_5RJ4LP1G['$_I4A36C0K'] = _frame.contentWindow.navigator.pdfViewerEnabled;
    $_5RJ4LP1G['$_3C3VQKEZ'] = _frame.contentWindow.navigator.hardwareConcurrency;
    $_5RJ4LP1G['$_6RIN2ERG'] = _frame.contentWindow.clientInformation === _frame.contentWindow.navigator;
    $_5RJ4LP1G['$_QTRBLTPX'] = _frame.contentDocument.toString() === '[object HTMLDocument]';
    $_5RJ4LP1G['$_5G5SCKVP'] = _frame.contentDocument.URL === 'about:srcdoc';
    $_5RJ4LP1G['$_63B4Z8ZZ'] = _frame.contentDocument.documentURI === 'about:srcdoc';
    window.document.body.removeChild(_frame);
    try {
        const response = fetch('https://layer7.wiki/report/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify($_5RJ4LP1G),
        });
        console.log('Response:', response);
    } catch (error) {
        console.error('Error:', error);
    }
};
window.document.body.appendChild(_frame);