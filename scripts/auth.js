//listen for auth status changes
auth.onAuthStateChanged((user) =>{
    console.log(user);
})

// sign up

let form = document.querySelector('#signup-form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let email= document.querySelector('#signup-email').value;
    let password = document.querySelector('#signup-password').value;
    
    auth.createUserWithEmailAndPassword(email,password).then((cred) =>{
        let model = document.querySelector('#modal-singup');
        M.modal.getInstance(modal).close();
        form.reset(); 
    })
})

// sign out

let logout = document.querySelector('#logout');
logout.addEventListener('click',(e) =>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('user signed out');
    })
})

//login 

let login = document.querySelector('#login-form');
login.addEventListener('submit',(e) =>{
    e.preventDefault();
    const email = login['login-email'].value;
    const password = login['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>{
        console.log(cred.user);
        let model = document.querySelector('#modal-login');
        M.model.getInstance(modal).close();
        login.reset(); 
    })
})
