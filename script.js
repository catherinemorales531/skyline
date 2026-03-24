// 1. PAGE ROUTER
function showView(pageId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// 2. TRACKING FUNCTIONALITY
function executeTracking() {
    const trackingId = document.getElementById('trackSearch').value.trim();
    if (!trackingId) {
        alert('Please enter a Container #, HAWB, or Transit ID');
        return;
    }
    alert(`Tracking Shipment: ${trackingId}\n\nEstablishing Encrypted Connection to Global Database...\n\nCarrier: OneWorld Logistics\nCurrent Location: Port of Rotterdam\nETA: 2026-03-28`);
}

// 3. GLOBAL TICKER WITH 80+ COUNTRIES
const countries = [
    {n:"USA", f:"🇺🇸"}, {n:"UK", f:"🇬🇧"}, {n:"Japan", f:"🇯🇵"}, {n:"China", f:"🇨🇳"}, {n:"UAE", f:"🇦🇪"}, 
    {n:"Switzerland", f:"🇨🇭"}, {n:"Singapore", f:"🇸🇬"}, {n:"Germany", f:"🇩🇪"}, {n:"France", f:"🇫🇷"}, {n:"Australia", f:"🇦🇺"},
    {n:"Canada", f:"🇨🇦"}, {n:"India", f:"🇮🇳"}, {n:"Brazil", f:"🇧🇷"}, {n:"Mexico", f:"🇲🇽"}, {n:"Korea", f:"🇰🇷"},
    {n:"Netherlands", f:"🇳🇱"}, {n:"Belgium", f:"🇧🇪"}, {n:"Spain", f:"🇪🇸"}, {n:"Italy", f:"🇮🇹"}, {n:"Greece", f:"🇬🇷"},
    {n:"Poland", f:"🇵🇱"}, {n:"Turkey", f:"🇹🇷"}, {n:"Egypt", f:"🇪🇬"}, {n:"Nigeria", f:"🇳🇬"}, {n:"South Africa", f:"🇿🇦"},
    {n:"Vietnam", f:"🇻🇳"}, {n:"Thailand", f:"🇹🇭"}, {n:"Malaysia", f:"🇲🇾"}, {n:"Indonesia", f:"🇮🇩"}, {n:"Philippines", f:"🇵🇭"},
    {n:"Hong Kong", f:"🇭🇰"}, {n:"Taiwan", f:"🇹🇼"}, {n:"Bangladesh", f:"🇧🇩"}, {n:"Pakistan", f:"🇵🇰"}, {n:"Saudi Arabia", f:"🇸🇦"},
    {n:"Ukraine", f:"🇺🇦"}, {n:"Romania", f:"🇷🇴"}, {n:"Czech Rep", f:"🇨🇿"}, {n:"Hungary", f:"🇭🇺"}, {n:"Portugal", f:"🇵🇹"}
];

function buildTicker() {
    const track = document.getElementById('ticker');
    if (!track) return;  // Exit if ticker element not found
    
    const fullList = [...countries, ...countries, ...countries, ...countries];
    fullList.forEach(c => {
        const temp = Math.floor(Math.random() * 18) + 14;
        const div = document.createElement('div');
        div.style.cssText = "display:flex; align-items:center; padding:0 40px; border-right:1px solid rgba(255,255,255,0.1);";
        div.innerHTML = `<span style="font-size:1.6rem; margin-right:15px;">${c.f}</span>
                         <div style="line-height:1">
                            <p style="font-size:0.7rem; font-weight:900; letter-spacing:1px">${c.n} NODE</p>
                            <p style="font-size:0.6rem; color:#c5a059; font-weight:bold">SECURE / ${temp}°C</p>
                         </div>`;
        track.appendChild(div);
    });
}

// 4. BACKGROUND VIDEO PLAYER
// HTML5 video element handles autoplay, looping, and muting

// 5. CURRENCY CONVERTER
function setupCurrencyConverter() {
    const rates = {
        USD: 1.0,
        EUR: 0.92,
        GBP: 0.79,
        CNY: 7.24,
        JPY: 149.50
    };
    
    const amountInput = document.getElementById('amount');
    const fromCurr = document.getElementById('fromCurrency');
    const toCurr = document.getElementById('toCurrency');
    const resultInput = document.getElementById('result');
    
    function convert() {
        if (!amountInput || !fromCurr || !toCurr || !resultInput) return;
        const amount = parseFloat(amountInput.value) || 0;
        const from = fromCurr.value;
        const to = toCurr.value;
        const converted = (amount / rates[from]) * rates[to];
        resultInput.value = converted.toFixed(2);
    }
    
    if (amountInput) amountInput.addEventListener('input', convert);
    if (fromCurr) fromCurr.addEventListener('change', convert);
    if (toCurr) toCurr.addEventListener('change', convert);
}

// 6. QUOTE FORM SUBMISSION
function setupQuoteForm() {
    const form = document.querySelector('.quote-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Quote request submitted successfully! Our team will contact you within 24 hours.');
            form.reset();
            showView('home');
        });
    }
}

// 7. INITIALIZE ON PAGE LOAD
window.addEventListener('DOMContentLoaded', function() {
    buildTicker();
    setupCurrencyConverter();
    setupQuoteForm();
});