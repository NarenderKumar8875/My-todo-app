
const input = document.querySelector('.input input');
const ul = document.querySelector(".tasks ul")
const task = document.querySelector(".tasks")

const addTask = () => {

    const mainLi = document.createElement("header");
    mainLi.setAttribute('class', 'mainLi')
    const li = document.createElement("li");
    const span = document.createElement("span");

    if (input.value != '') {
        li.innerHTML = input.value;
        ul.appendChild(mainLi)

        // aise bhi kr skta hu lekin sirf jo html ke khud ke atributes h sirf unko aise kr skte h
        // span1.setAttribute("class", "checkBox"); bad me hta dia tha koi dikkat aa rhi thi is liye

        mainLi.appendChild(li);
        mainLi.appendChild(span);
        input.value = '';
        savedata()
    } else {
        alert('plz add some task...!!!')
    }

}

ul.addEventListener('click', (e) => {

    if (e.target.tagName === "DIV") {
        e.target.classList.toggle('check')
        savedata()
    }

    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }

    if (e.target.tagName === "LI") {
        e.target.classList.toggle('done')
        e.target.classList.toggle('check')
        savedata()
    }

})


let savedata = () => {
    localStorage.setItem("data", ul.innerHTML);
}

let showData = () => {
    ul.innerHTML = localStorage.getItem('data')
}
showData()