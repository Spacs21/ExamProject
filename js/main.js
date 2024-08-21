let sidebar = document.getElementById("sidebar")

function showMenu(){
    sidebar.style.left = "0px"
}
function closeMenu(){
    sidebar.style.left = "-250px"
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});
