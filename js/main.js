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
    const yearlyBtn = document.getElementById('yearlyBtn');
    const priceCards = document.querySelectorAll('.card');
    const periodElements = document.querySelectorAll('.cardTop p:first-child');

    function switchPlan(isMonthly) {
        if (isMonthly) {
            monthlyBtn.classList.add('checked');
            yearlyBtn.classList.remove('checked');
        } else {
            yearlyBtn.classList.add('checked');
            monthlyBtn.classList.remove('checked');
        }

        priceCards.forEach((card, index) => {
            const priceElement = card.querySelector('.cardTop__charge');
            const price = isMonthly ? priceElement.dataset.monthlyPrice : priceElement.dataset.yearlyPrice;
            priceElement.textContent = price;
            
            // 更新周期文本（每月/每年）
            const periodText = isMonthly ? '/月' : '/月';
            periodElements[index].innerHTML = periodElements[index].innerHTML.replace(/\/[月年]/, periodText);
        });
    }

    monthlyBtn.addEventListener('click', function() {
        switchPlan(true);
    });

    yearlyBtn.addEventListener('click', function() {
        switchPlan(false);
    });

    // 初始化显示（默认显示年度价格）
    switchPlan(false);
});


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

// 初始化页面内容
updateContent();
