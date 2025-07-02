    // 简单的服务卡片交互动效
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                alert('功能模块建设中，感谢关注杭州地铁！');
            });
        });
    });
