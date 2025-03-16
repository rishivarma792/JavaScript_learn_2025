const USERS = [
    { id: 1, name: 'Jon Snow',img:"https://th.bing.com/th/id/OIP.w9_l5eEGr6c9NfDvC4njVwHaDt?w=346&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 2, name: 'Catvertiser',img:"https://th.bing.com/th/id/OIP.0_4hohBx3KUhTEchCBtCbAHaD4?w=331&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 3, name: 'NapoleonCat.com',img:"https://th.bing.com/th/id/OIP.4DcyTmdo5zYdDaLosBm9wgAAAA?w=144&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 4, name: 'Arya Stark',img:"https://th.bing.com/th/id/OIP.1Mdh0j-ezr0288Fl1P_HPQHaE7?w=208&h=138&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 5, name: 'Daenerys Targaryen',img:"https://th.bing.com/th/id/OIP.aCLJ3QUXKjsVzTD_ixHK_AHaFy?w=208&h=162&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
];

const elements = {
    input: document.getElementById('commentInput'),
    dropdown: document.getElementById('mentionsDropdown'),
    list: document.getElementById('commentsList'),
    commentBtn: document.getElementById('commentButton')
};

let cursorPosition = 0;
let comments = [];
let selectedMentionIndex = -1;

const handlers = {
    keyUp: e => cursorPosition = e.target.selectionStart,

    keyDown: e => { 
        if (elements.dropdown.classList.contains('hidden')) return;

        const items = elements.dropdown.querySelectorAll('.mention-item'); 
        console.log(e.key);
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedMentionIndex = Math.min(selectedMentionIndex + 1, items.length - 1);
                updateSelectedMention();
                break;
            case 'ArrowUp':
                e.preventDefault();
                selectedMentionIndex = Math.max(selectedMentionIndex - 1, 0);
                updateSelectedMention();
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedMentionIndex >= 0) {
                    insertMention(USERS[selectedMentionIndex].name);
                }
                break;
            case 'Escape':
                toggleDropdown(false);
                break;
        }
    },

    textChange: e => {
        const text = e.target.value;  
        cursorPosition = e.target.selectionStart;  
        const lastChar = text.charAt(cursorPosition - 1);

        if (lastChar === '@') {
            toggleDropdown(true);
            updateFilteredUsers('');
        } else if (!elements.dropdown.classList.contains('hidden')) {
            const atIndex = text.lastIndexOf('@', cursorPosition - 1);
            atIndex !== -1
                ? updateFilteredUsers(text.slice(atIndex + 1, cursorPosition))
                : toggleDropdown(false);
        }
    }
};

function toggleDropdown(show) {
    elements.dropdown.classList.toggle('hidden', !show);
    selectedMentionIndex = show ? 0 : -1;
}

function updateSelectedMention() {
    const items = elements.dropdown.querySelectorAll('.mention-item');
    items.forEach((item, i) => {
        item.classList.toggle('selected', i === selectedMentionIndex);
        if (i === selectedMentionIndex) item.scrollIntoView({ block: 'nearest' });
    });
}

function updateFilteredUsers(searchTerm) {
    const filtered = USERS.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    elements.dropdown.innerHTML = filtered.map(user => 
      `<button class="mention-item" onclick="insertMention('${user.name}')">
        <img src=${user.img} alt="mention-image" class="mention-image"/>
        <span>${user.name}</span>
      </button>`
    ).join('');

    updateSelectedMention();
}

function insertMention(userName) {
    const text = elements.input.value; 
    const beforeCursor = text.slice(0, cursorPosition); 
    const atIndex = beforeCursor.lastIndexOf('@'); 
    // const afterCursor = text.slice(cursorPosition);
    elements.input.value = beforeCursor.slice(0, atIndex) +` @${userName}` ; 
    toggleDropdown(false);
    elements.input.focus();

    // const newPos = atIndex + userName.length + 2;
    // elements.input.setSelectionRange(newPos, newPos);
}

function addComment() {
    const text = elements.input.value.trim();
    if (!text) return;
    comments.push({
        id: Date.now(),
        text
    }); 
    renderComments();
    elements.input.value = '';
}

function renderComments() {
    elements.list.innerHTML = comments.map(comment => {
        let text = comment.text;
        USERS.forEach(user => {
            text = text.replace(
                new RegExp(`@${user.name}`, 'g'),
               `<span class="mention">@${user.name}</span>`
            );
        });
        return `<div class="comment">${text}</div>`;
    }).join('');
}

// Event Listeners
elements.input.addEventListener('input', handlers.textChange);
elements.input.addEventListener('keyup', handlers.keyUp);
elements.input.addEventListener('keydown', handlers.keyDown);
elements.commentBtn.addEventListener('click', () => addComment()); 
