const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){

    // console.log(sidebar.classList);


    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else{
    //     sidebar.classList.add('show-sidebar');
    // }


    // another way to add sidebar toggle 

    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});


// ANOTHER WAY TO ADD SIDEBAR TOGGLE


// const getElement = (selector) => {
//     const el = document.querySelector(selector)
//     if (el) return el
//     throw new Error ('Please check your classes : $ {selector} does not exist')
// }

// const sidebarToggle = getElement('.sidebar-toggle')
// const sidebar = getElement('.sidebar')
// const closeBtn = getElement('.close-btn')

// sidebarToggle.addEventListener('click', function () {
//     sidebar.classList.toggle('show-sidebar')
// })

// closeBtn.addEventListener('click', () => {
//     sidebar.classList.remove('show-sidebar')
// })