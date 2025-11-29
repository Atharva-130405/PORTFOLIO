let currentApp = null;

function openApp(appName) {
    const appElement = document.getElementById(appName + 'App');
    const homeScreen = document.getElementById('homeScreen');
    
    if (appElement) {
        currentApp = appElement;
        homeScreen.style.display = 'none';
        
        setTimeout(() => {
            appElement.classList.add('active');
        }, 10);
    }
}

function closeApp() {
    if (currentApp) {
        currentApp.classList.remove('active');
        
        setTimeout(() => {
            currentApp = null;
            document.getElementById('homeScreen').style.display = 'block';
        }, 300);
    }
}

function toggleProject(card) {
    card.classList.toggle('expanded');
}

// Prevent body scroll when viewing apps
document.querySelectorAll('.app-view').forEach(app => {
    app.addEventListener('scroll', (e) => {
        e.stopPropagation();
    });
});