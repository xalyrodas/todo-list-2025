export function footer() {
    const footer = document.createElement('footer');

    const link = document.createElement('a');
    link.href = 'https://github.com/xalyrodas/todo-list-2025';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '@xalyrodas'; 

    link.className = 'footer-link';
    footer.appendChild(link);

    return footer;
}
