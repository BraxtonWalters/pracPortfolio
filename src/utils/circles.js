
const circleFollow = () => {
    const circleArr = ["circle2", "circle6", "circle7", "circle9"];
    let previousCircle = null;

    const mousePosition = () => {
        const e = window.Event;
    }

    const getRandomElement = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    const getRandomCircle = () => {
        let randomCircle;

        // Keep getting random circles until dat be diff from the prev one
        do {
            randomCircle = getRandomElement(circleArr);
        } while (randomCircle === previousCircle);

        previousCircle = randomCircle;
        return randomCircle;
    }

    const updateCircle = () => {
        const ranCircle = document.getElementById(getRandomCircle());
        // ranCircle.style.left = "50px"
        // ranCircle.style.top = "500px"
        // console.log(ranCircle);
    }

    // track the mouse prob with xy 

    // deal with the transition of the circle going to the mouse and going back to the animation

    // figure out how to tell where a square is at in its animation and keep track of that. then calc where it should be before the setinterval has chosen a new square.

    // not sure about the second part

    // setInterval(updateCircle, 5000);


}

export default circleFollow;