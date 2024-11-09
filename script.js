// const block = document.querySelector('#block');
// const container = document.querySelector('.container');

// /**
//  * 
//  * on blokc
//  * 
//  * 1.dragStart
//  * 2. dragEnd
//  * 
//  * 1. dragenter
//  * 2. dragover
//  * 3. dragleave
//  * 
//  * No two nodes in the same tree dont have same address
//  *
//  */

// function onDragStart(){

//     console.log('dragging started');
// }


// function onDragEnd(){

//     console.log('dragging ended');
// }

// block.addEventListener("dragstart",onDragStart);
// block.addEventListener('dragend',onDragEnd);

// container.addEventListener("dragenter",()=>{

//     console.log('some element is dragged into the container')
// });

// container.addEventListener('dragover',()=>{

//     // console.log('dragging over the container...');
//     //  i want to enable to dropping 
//     // by default dropping is not allowed

//     event.preventDefault();
//     console.log('dropped element')
// })

// container.addEventListener("dragleave",()=>{

//     console.log('dragged element is leaved from the container')
// });

// container.addEventListener('drop',()=>{

//     // container.appendChild(block);// this is to remove and add

//     // if we want to add a copy by not removing

//     let blockCopy = block.cloneNode(true);
//     // block = #200
//     // cloneNode(block) => cloneNde(#200) => #300
//     container.appendChild(blockCopy);

// })

// // let user = {name:'deepa'} //#100
// // let user1 = user;// user1 = #100
// // console.log(user1 === user) //true
// // user1 = {...user}// #200
// // console.log(user1 === user); // false;

const createIssue = document.getElementById("create-issue");
const issueInput = document.getElementById("issue-input");
const todoContainer = document.getElementById("todo");

createIssue.addEventListener('click',onCreateClick);

issueInput.addEventListener('blur',onBlurCreateIssueInput);
issueInput.addEventListener('keyup',onEnterInput);

function toggleCreateIssueOptions(){

    createIssue.classList.toggle('hide');
    issueInput.classList.toggle('hide');

    if(!issueInput.classList.contains('hide')){
        //if users see text ara we  need to auto focus on it
        issueInput.focus();
    }
}

function onBlurCreateIssueInput(){

    if(!issueInput.classList.contains('hide'))
        toggleCreateIssueOptions();
}

function onCreateClick(){

    toggleCreateIssueOptions();
}

function onEnterInput(e){

    if(e.keyCode === 13){

        // clicked on enter key
        const issueName = issueInput.value;
        if(!issueName)
            return;
        
        // create an issue card with the issueName

        const issueCard = document.createElement('div');
        issueCard.className = 'card';

        issueCard.innerHTML = `
                            <span>${issueName}</span>
                            <span class="material-icons" onclick="deleteCard(this)">delete</span>
                            `;
        issueCard.draggable = true;
        issueCard.addEventListener('dragstart',onDragStart);
        issueInput.value='';
        todoContainer.appendChild(issueCard);
        toggleCreateIssueOptions();
    }
}

function deleteCard(deleteButton){
    const card = deleteButton.parentNode ;
    card.remove();
}   