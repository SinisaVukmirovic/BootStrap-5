// JS for using tooltips 
// NOTE class can be anithing but a tooltip, thats Bootstrap5 reserved keyword
const tooltips = document.querySelectorAll('.tt');

tooltips.forEach(tt => {
    new bootstrap.Tooltip(tt);
});