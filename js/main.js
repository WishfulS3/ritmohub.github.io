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


//年度
document.addEventListener('DOMContentLoaded', function() {
    const monthlyBtn = document.getElementById('monthlyBtn');
    const yearlyBtn = document.getElementById('yearlyBtn');
    const priceCards = document.querySelectorAll('.card');

    monthlyBtn.addEventListener('click', function() {
        switchPlan('monthly');
    });

    yearlyBtn.addEventListener('click', function() {
        switchPlan('yearly');
    });

    function switchPlan(plan) {
        if (plan === 'monthly') {
            monthlyBtn.classList.add('checked');
            yearlyBtn.classList.remove('checked');
        } else {
            yearlyBtn.classList.add('checked');
            monthlyBtn.classList.remove('checked');
        }

        // 这里添加切换价格的逻辑
        priceCards.forEach(card => {
            const priceElement = card.querySelector('.cardTop__charge');
            if (plan === 'monthly') {
                // 切换到月度价格
                priceElement.textContent = priceElement.getAttribute('data-monthly-price');
            } else {
                // 切换到年度价格
                priceElement.textContent = priceElement.getAttribute('data-yearly-price');
            }
        });
    }
});
