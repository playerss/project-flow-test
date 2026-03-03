// 流程测试项目 - 主脚本

function showMessage() {
    const messageEl = document.getElementById('message');
    const messages = [
        '👋 Hello World! 项目运行正常',
        '✅ 页面功能测试通过',
        '🎉 团队协作流程验证成功',
        '🚀 准备进入验收阶段'
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageEl.textContent = messages[randomIndex];
    
    // 添加动画效果
    messageEl.style.animation = 'none';
    setTimeout(() => {
        messageEl.style.animation = 'bounce 0.5s ease';
    }, 10);
}

// 页面加载完成
window.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 流程测试项目 V0.1 已加载');
    console.log('仓库：https://github.com/playerss/project-flow-test');
});
