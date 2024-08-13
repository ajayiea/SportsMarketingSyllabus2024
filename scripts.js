document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            const targetId = tab.getAttribute('data-tab');
            document.querySelector(`#${targetId}`).classList.add('active');
            tab.classList.add('active');
        });
    });

    // Set default active tab and content
    document.querySelector('.tab-button.active').click();
});
