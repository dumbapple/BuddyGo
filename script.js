let color = 0; // 0 represents black, 1 represents white
let intersections = document.getElementsByTagName('td');

for (const intersection of intersections) {
    let isStarPoint = false;
    if (intersection.innerHTML === 'o') {
        isStarPoint = true;
    }

    intersection.addEventListener("click", () => {
        if (intersection.classList.length === 0) { // Case where intersection is empty
            intersection.innerHTML = ' ';
            if (color) {
                intersection.classList.toggle('white-stone');
                color--;
            } else {
                intersection.classList.toggle('black-stone');
                color++;
            }
        } else if (intersection.classList.contains('white-stone')) {
            intersection.classList.toggle('white-stone');
            if (isStarPoint) {
                intersection.innerHTML = 'o';
            } else {
                intersection.innerHTML = '+';
            }
        } else if (intersection.classList.contains('black-stone')) {
            intersection.classList.toggle('black-stone');
            if (isStarPoint) {
                intersection.innerHTML = 'o';
            } else {
                intersection.innerHTML = '+';
            }
        }
    });
}

