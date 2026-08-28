(function () {
    const footer = document.querySelector('footer');
    if (!footer) {
        return;
    }

    const projectPath = window.location.pathname.includes('/projects/') ? '' : 'projects/';
    const homePath = window.location.pathname.includes('/projects/') ? '../index.html' : 'index.html';
    const caseStudies = [
        ['Brand refresh', projectPath + 'jobs-brand-refresh.html'],
        ['Company profiles', projectPath + 'company2.html'],
        ['Accessibility initiative', projectPath + 'a11y.pdf'],
        ['Team collaboration', projectPath + 'note.html']
    ];
    const articles = [
        ['Conversation mining with AI', projectPath + 'cv-ai-mining.html'],
        ['AI copy skill for UX teams', projectPath + 'ai-copy-skill.html'],
        ['Vibe coding and prototyping', 'https://medium.com/@amandine.revol/why-the-codebase-became-my-best-prototyping-tool-d9f3495a3d1d'],
        ['AI design workflow', 'https://medium.com/@amandine.revol/how-ai-tools-changed-the-way-i-work-as-a-UX-designer-from-user-flow-to-user-test-in-a-week-a889586673c7']
    ];

    function renderLinks(links) {
        return links.map(function (link) {
            const external = link[1].startsWith('http') || link[1].endsWith('.pdf');
            const attributes = external ? ' target="_blank" rel="noopener noreferrer"' : '';
            return '<li><a href="' + link[1] + '"' + attributes + '>' + link[0] + '</a></li>';
        }).join('');
    }

    footer.innerHTML = '<div class="footer-grid">' +
        '<section class="footer-group"><h2>Case studies</h2><ul>' + renderLinks(caseStudies) + '</ul></section>' +
        '<section class="footer-group"><h2>Articles</h2><ul>' + renderLinks(articles) + '</ul></section>' +
        '<section class="footer-group"><h2>Social links</h2><ul>' +
            '<li><a href="https://www.linkedin.com/in/amandine-revol/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>' +
            '<li><a href="https://github.com/amandine-revol" target="_blank" rel="noopener noreferrer">GitHub</a></li>' +
            '<li><a href="https://dribbble.com/Amandines" target="_blank" rel="noopener noreferrer">Dribbble</a></li>' +
        '</ul></section>' +
        '</div><div class="footer-bottom"><span>© 2026 Amandine Revol</span><a href="' + homePath + '">Back home</a></div>';
})();
