const botEl = document.getElementById('bot');


function createNoteEl (id, content) {
    console.log(id, content);

}

function addNote () {
    //console.log('Clicked');
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: '',   
    };
    // console.log(noteObj);
    const noteEl = createNoteEl(noteObj.id, noteObj.content)
}

botEl.addEventListener('click', addNote)