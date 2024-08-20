console.log('Price cards found:', document.querySelectorAll('.card').length);
console.log('Period elements found:', document.querySelectorAll('.cardTop p:first-child').length);
const menu = document.querySelector('.navTop');
console.log("JavaScript文件已加载");

function toggleMenu(x){
    x.classList.toggle('change');
    menu.classList.toggle('change');
}


//start faq accordion
var acc = document.getElementsByClassName('accordion');
console.log(acc);
for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        console.log(panel.scrollHeight);
        console.log(Boolean(0));
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight+'px'
        }
    })
}
//end faq accordion



//如果你想要平滑滚动效果）：
document.querySelectorAll('.flex a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Link clicked: ' + this.getAttribute('href'));
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            console.log('Scrolling to: ' + targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.log('Target element not found: ' + targetId);
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const monthlyBtn = document.getElementById('monthlyBtn');
    const quarterlyBtn = document.getElementById('quarterlyBtn');
    const yearlyBtn = document.getElementById('yearlyBtn');

    if (monthlyBtn) {
        monthlyBtn.addEventListener('click', () => {
            console.log('Monthly button clicked');
            switchPlan('monthly');
        });
    }

    if (quarterlyBtn) {
        quarterlyBtn.addEventListener('click', () => {
            console.log('Quarterly button clicked');
            switchPlan('quarterly');
        });
    }

    if (yearlyBtn) {
        yearlyBtn.addEventListener('click', () => {
            console.log('Yearly button clicked');
            switchPlan('yearly');
        });
    }

    // 初始化显示（默认显示年度价格）
    switchPlan('yearly');
});

function switchPlan(period) {
    console.log('Switching to:', period);

    // 移除所有按钮的checked类
    [monthlyBtn, quarterlyBtn, yearlyBtn].forEach(btn => {
        if (btn) btn.classList.remove('checked');
    });
    
    // 为选中的按钮添加checked类
    const selectedBtn = document.getElementById(`${period}Btn`);
    if (selectedBtn) selectedBtn.classList.add('checked');

    const priceCards = document.querySelectorAll('.card');

    priceCards.forEach((card, index) => {
        console.log(`Processing card ${index}`);
        console.log(`Card ${index} HTML:`, card.outerHTML);

        const priceElement = card.querySelector('.cardTop__charge');
        if (!priceElement) {
            console.error(`Price element not found for card ${index}`);
            return; // Skip this iteration
        }

        console.log(`Price element for card ${index}:`, priceElement);
        console.log(`Dataset for card ${index}:`, priceElement.dataset);

        let price;
        let periodText;

        switch(period) {
            case 'monthly':
                price = priceElement.dataset.monthlyPrice;
                periodText = '/月';
                break;
            case 'quarterly':
                price = priceElement.dataset.quarterlyPrice;
                periodText = '/季度付费每月';
                break;
            case 'yearly':
                price = priceElement.dataset.yearlyPrice;
                periodText = '/年付费每月';
                break;
        }

        if (!price) {
            console.error(`Price not found for ${period} period in card ${index}`);
            return; // Skip this iteration
        }

        console.log('Updating price for card', index, 'to', price);
        priceElement.textContent = price + periodText;
    });
}




let currentLang = 'zh'; // 默认语言为中文

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateContent();
}

function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });
}

document.getElementById('languageToggle').addEventListener('click', toggleLanguage);

const translations = {
    'zh': {
        'home': '首页',
        'features': '主要功能',
        'pricing': '定价',
        'news': '新闻',
        'faq': '常见问题',
        'contact': '联系我们',

        // 添加更多中文文本...
    },
    'en': {
        'home': 'Home',
        'features': 'Features',
        'pricing': 'Pricing',
        'news': 'news',
        'faq': 'FAQ',
        'contact': 'contact',

        // 添加更多英文文本...
    }
};

// 初始化页面内容
updateContent();
