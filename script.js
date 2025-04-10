document.addEventListener('DOMContentLoaded', () => {
    const fortuneCard = document.getElementById('fortuneCard');
    const fortuneText = document.getElementById('fortuneText');

    const fortunes = [
        '今天会有好运降临，保持积极的心态！',
        '遇到困难不要怕，坚持就是胜利。',
        '与人为善，必有回报。',
        '机会就在眼前，大胆尝试吧！',
        '今天适合学习新知识，不妨尝试一下。',
        '贵人将至，好运即将来临。',
        '付出终有回报，继续努力！',
        '保持耐心，时机即将成熟。',
        '相信自己，你比想象中更强大。',
        '今天是适合做决定的好日子。'
    ];

    let isFlipped = false;

    fortuneCard.addEventListener('click', () => {
        if (!isFlipped) {
            isFlipped = true;
            fortuneCard.classList.add('flipped');
            
            // 随机选择一个运势
            const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            fortuneText.textContent = randomFortune;
        } else {
            isFlipped = false;
            fortuneCard.classList.remove('flipped');
            fortuneText.textContent = '';
        }
    });
});