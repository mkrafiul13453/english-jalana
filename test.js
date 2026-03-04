const createElement = (arr) =>{
    const htmlElement = arr.map((el) => {
        `<span class = "btn> ${el} </span>`;
    });
    return htmlElement.join(" ");
};