// run a function that compares the total height to the current position
function updateProgressBar(){
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = '${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%';
    console.log(scrollPercent);
    // update the progress var to that total height
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
}

// Event listener for the scroll
document.addEventListener('scroll', updateProgressBar);