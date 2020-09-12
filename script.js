let color = 0; // The color of the next stone to be placed (0 indicates black, 1 indicates white)
let rows = document.getElementsByTagName('tr');
let intersections = document.getElementsByTagName('td');
console.log("rows", rows);
console.log("intersections", intersections);

for (const intersection of intersections) {
    intersection.addEventListener("click", () => {
        // Place stone
    });
}

const placeStone = (color) => {
    // TODO
    if (color === 0) {
        // Do something
        color++;
    } else {
        // Do something
        color--;
    }
}


const handleClick = () => {
    alert("You clicked me!");
}