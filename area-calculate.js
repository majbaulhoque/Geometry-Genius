function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value;
    const base = parseFloat(baseValueTextString);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueTextString = heightField.value;
    const height = parseFloat(heightValueTextString);

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthFieldString = widthField.value;
    const width = parseFloat(widthFieldString);

    const heightField = document.getElementById('rectangle-height');
    const heightFieldString = heightField.value;
    const height = parseFloat(heightFieldString);

    const rectangleArea = width * height;
    console.log(rectangleArea);

    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = rectangleArea;
}


// ! Reuseable function --> reduce duplicate code

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    console.log(area);

    setInnerText('parallelogram-area',area);

    // const parallelogramArea = document.getElementById('parallelogram-area');
    // parallelogramArea.innerText = area;

}

// ? Reuseable get input value field in number.

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value
}

// * Reuseable set span, p, div, etc text

function setInnerText(spanId, area){
    const element = document.getElementById(spanId);
    element.innerText = area;
}