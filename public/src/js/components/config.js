const body = document.querySelector('body');

// missing forEach on NodeList for IE11
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

// Get the current breakpoint
function getBreakpoint() {
	return window.getComputedStyle(document.body, ':before').content.replace(/"/g, '');
}

window.addEventListener('load', () => {
	body.classList.remove('no-transition');
});

export default getBreakpoint;

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("no-transition");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("no-transition");
    }, 400);
});
