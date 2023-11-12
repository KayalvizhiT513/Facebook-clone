const showMoreButton = document.getElementById('show-more-button');
const hiddenElements = document.querySelectorAll('.hidden');
const elementList = document.querySelector('.element-list');

showMoreButton.addEventListener('click', () => {
    hiddenElements.forEach(element => {
        element.classList.remove('hidden');
    });
    showMoreButton.style.display = 'none';
    const showLessButton = document.createElement('button');
    showLessButton.id = 'show-less-button';
    showLessButton.textContent = 'Show Less';
    elementList.appendChild(showLessButton);

    showLessButton.addEventListener('click', () => {
        hiddenElements.forEach(element => {
            element.classList.add('hidden');
        });
        showMoreButton.style.display = 'block';
        elementList.removeChild(showLessButton);
    });
});

const addButton = document.getElementById('add-button');
const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('image-input');
const textList = document.getElementById('text-list');

addButton.addEventListener('click', () => {
    const enteredText = textInput.value;
    const selectedImage = imageInput.files[0];

    if (enteredText.trim() !== '' || selectedImage) {
        const commentBlock = document.createElement('div');
        commentBlock.classList.add('comment-block');
        
        if (enteredText.trim() !== '') {
            const textContent = document.createElement('p');
            textContent.classList.add('text');
            textContent.textContent = enteredText;
            commentBlock.appendChild(textContent);
        }
        
        if (selectedImage) {
            const imageContent = document.createElement('img');
            imageContent.classList.add('image');
            imageContent.src = URL.createObjectURL(selectedImage);
            commentBlock.appendChild(imageContent);
        }
        
        const emojiButtons = document.createElement('div');
        emojiButtons.classList.add('emoji-buttons');
        
        const emojiHappy = createEmojiButton('😃');
        const emojiNeutral = createEmojiButton('😐');
        const emojiSad = createEmojiButton('😞');
        
        emojiButtons.appendChild(emojiHappy);
        emojiButtons.appendChild(emojiNeutral);
        emojiButtons.appendChild(emojiSad);
        
        commentBlock.appendChild(emojiButtons);
        
        textList.insertBefore(commentBlock, textList.firstChild);
        
        textInput.value = '';
        imageInput.value = '';
    }
});

function createEmojiButton(emoji) {
    const button = document.createElement('button');
    button.innerHTML = emoji;
    
    button.addEventListener('click', () => {
        const emojiButtons = button.parentNode.querySelectorAll('button');
        
        if (button.classList.contains('selected')) {
            emojiButtons.forEach(btn => btn.style.display = 'block');
            button.classList.remove('selected');
        } else {
            emojiButtons.forEach(btn => {
                if (btn !== button) {
                    btn.style.display = 'none';
                    btn.classList.remove('selected');
                }
            });
            button.classList.add('selected');
        }
    });
    
    return button;
}

const element1 = document.getElementById('ele1');
const element2 = document.getElementById('ele2');
const column3 = document.getElementById('col3');

element1.addEventListener('click', () => {
    // Display user profile in column 3
    displayUserProfile();
});

element2.addEventListener('click', () => {
    // Display user groups in column 3
    displaySearchBox();
});

// Initial content for column 3 (welcome note)
column3.innerHTML = '<div class="bouncing-image"><img src="./img/welcome.png" alt="Bouncing Image"><figcaption><h2>Welcome</h2></figcaption></div>';

function displaySearchBox() {
    const searchBoxContent = `
        <div class="search-box">
            <input type="text" class="search-input" placeholder="Find your friend">
            <button class="search-button">🔍</a></button>
        </div>
    `;

    column3.innerHTML = searchBoxContent;
}

function displayUserProfile() {
    const userContent = `
        <div class="user-profile">
            <img src="./img/userImg.png" alt="User Avatar" class="user-image">
            <div class="user-name">Teddy Kayalvizhi</div>
            <div class="user-quote">"Life is a journey, enjoy every step!"</div>

            <!-- Display user details in a table -->
            <table class="user-details">
                <tr>
                    <td class="label">Age:</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td class="label">Location:</td>
                    <td>New York, USA</td>
                </tr>
                <tr>
                    <td class="label">Occupation:</td>
                    <td>Software Engineer</td>
                </tr>
            </table>

            <!-- Embed a YouTube video using an iframe -->
            <br><br>
            <strong>Favorite pages:</strong>
            <iframe width="350" height="250" src="https://www.youtube.com/embed/g85WsxE1gAU" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    column3.innerHTML = userContent;
}

const addFav = document.getElementById('addFav');
addFav.addEventListener('click', function() {
    const newFav = document.createElement('li');
    const favName = prompt("Enter your Favorite hobby: ");
    newFav.textContent = favName;
    const favList = document.getElementById("favList");
    favList.appendChild(newFav);
});

