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

    // ! Add to calculation entry

    addToCalculationEntry('parallelogram',area);
}

// ellipse-part

function calculateEllipseArea(){
    const largeValue = getInputValue('ellipse-major-radius');
    const minorValue = getInputValue('ellipse-minor-radius');

    const area = 3.1416 * largeValue * minorValue;
    setInnerText('ellipse-area',area);
}

// Rhombus-part

function calculateRhombusArea(){
    const diagonalOne = getInputValue('diagonal-one');
    const diagonalTwo = getInputValue('diagonal-two');

    const area = 0.5 * diagonalOne * diagonalTwo;
    setInnerText('rhombus-area', area);

    // validate input
    if(isNaN(diagonalOne)|| isNaN(diagonalTwo)){
        alert("Please input a number!");
    }
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

// Add to calculation entry

function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const p = document.createElement('p');
    p.innerHTML =`${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}