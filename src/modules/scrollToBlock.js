const scrollToBlock = () => {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    for (let item of menuLinks) {
        item.addEventListener('click', (e) => {
            let hashVal = item.getAttribute('href');
            let topOfElement = document.querySelector(hashVal).offsetTop - 95;

            window.scroll({ top: topOfElement, behavior: "smooth" });
            history.pushState(null, null, hashVal);
            e.preventDefault();
        });
    }
};

export default scrollToBlock;
