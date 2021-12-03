function setPersentage(text) {
    $('#holdon-message').html(window.loadingText + ' (' + text + '%)');
}

function openLoading(text) {
    window.loadingText = text;

    HoldOn.open({
        theme:"sk-rect",
        message: text
    });   
}

function stopLoading() {
    setTimeout(function () {
        HoldOn.close();
    }, 500);
}

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}