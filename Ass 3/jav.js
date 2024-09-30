function changeText() {
    const header = document.getElementById('header');
    header.innerHTML = 'The Text Has Been Changed!';
    
    const description = document.getElementsByClassName('description')[0];
    description.innerHTML = 'This is a <strong>new paragraph</strong> with updated content!';
    
    const spans = document.getElementsByTagName('span');
    if (spans.length > 0) {
        spans[0].innerHTML = 'new highlighted text';
    }
}

function changeImage() {
    const image = document.getElementById('dynamicImage');
    image.src = 'image2.jpeg';
}

function addText() {
    const textContainer = document.getElementById('textContainer');
    const newText = document.createElement('div');
    newText.className = 'text-item';
    newText.textContent = 'This is some new text added dynamically.';
    textContainer.appendChild(newText);
}

function deleteNode() {
    const textContainer = document.getElementById('textContainer');
    const textItems = textContainer.getElementsByClassName('text-item');
    if (textItems.length > 0) {
        textContainer.removeChild(textItems[textItems.length - 1]);
    } else {
        console.error('No text items to delete.');
    }
}

document.getElementById('changeTextButton').addEventListener('click', changeText);
document.getElementById('changeImageButton').addEventListener('click', changeImage);
document.getElementById('addTextButton').addEventListener('click', addText);
document.getElementById('deleteNodeButton').addEventListener('click', deleteNode);
