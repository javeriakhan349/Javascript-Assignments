
var userName = "";
var userEmail = "";
var userPassword = "";




var cardBg = "https://picsum.photos/id/1015/400/300";



function showSignup() {

    document.getElementById("signupForm").className = "signupForm";

    document.getElementById("loginForm").className = "loginForm d-none";

    document.getElementById("postPage").className = "postpage d-none";

}




function showLogin() {

    document.getElementById("loginForm").className = "loginForm";

    document.getElementById("signupForm").className = "signupForm d-none";

    document.getElementById("postPage").className = "postpage d-none";

}




function signup(event) {

    event.preventDefault();

    userName = document.getElementById("signup-name").value.trim();

    userEmail = document.getElementById("signup-email").value.trim();

    userPassword = document.getElementById("signup-password").value;

    var confirmPassword = document.getElementById("confirm-password").value;


    if (userName == "" || userEmail == "" || userPassword == "") {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all fields"
        });

    }

    else if (userPassword != confirmPassword) {

        Swal.fire({
            icon: "error",
            title: "Password Error",
            text: "Passwords do not match"
        });

    }

    else {

        Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: "You can now login."
        });

        document.getElementById("login-email").value = userEmail;

        document.getElementById("login-password").value = "";

        document.getElementById("signup").reset();

        showLogin();

    }

}



function login(event) {

    event.preventDefault();

    var email = document.getElementById("login-email").value.trim();

    var password = document.getElementById("login-password").value;


    if (email == userEmail && password == userPassword && email != "") {

        Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "Welcome " + userName
        });

        document.getElementById("loginForm").className = "d-none";

        document.getElementById("signupForm").className = "d-none";

        document.getElementById("postPage").className = "postpage";

        document.getElementById("logoutBtn").classList.remove("d-none");

    }

    else {

        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Invalid Email or Password"
        });

    }

}



function logout() {

    document.getElementById("login-email").value = "";

    document.getElementById("login-password").value = "";

    document.getElementById("logoutBtn").classList.add("d-none");

    showLogin();

}



function selectImg(img) {

    cardBg = img.getAttribute("src");

    var bgImg = document.getElementsByClassName("bgImg");

    for (var i = 0; i < bgImg.length; i++) {

        bgImg[i].className = "bgImg";

    }

    img.classList.add("selected");

}



function post() {

    console.log("post");

    var title = document.getElementById("title");

    var desc = document.getElementById("desc");

    var postContainer = document.getElementById("postContainer");


    if (title.value.trim() && desc.value.trim()) {

        postContainer.innerHTML += `

            <div class="col-12 col-md-6 col-lg-4 mb-3">

                <div class="card mt-2 post-card">

                    <div class="card-header bg-dark text-light">

                        @blog

                    </div>

                    <div class="card-body"
                        data-bg="${cardBg}"
                        style="background-image: url('${cardBg}')">

                        <figure class="post-content">

                            <blockquote class="blockquote">

                                <p>${escapeHTML(title.value.trim())}</p>

                            </blockquote>

                            <figcaption class="blockquote-footer mb-0">

                                <em>${escapeHTML(desc.value.trim())}</em>

                            </figcaption>

                        </figure>

                    </div>

                    <div class="ms-auto m-2">

                        <button class="btn btn-warning px-4"
                            onclick="editPost(event)">

                            Edit

                        </button>

                        <button class="btn btn-danger"
                            onclick="deletePost(event)">

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        `;

    }

    else {

        Swal.fire({

            icon: "error",

            title: "Oops...",

            text: "Title & description can't be empty"

        });

    }

    title.value = "";

    desc.value = "";

}




function deletePost(event) {

    var card = event.target.parentNode.parentNode.parentNode;

    card.remove();

}



function editPost(event) {

    var card = event.target.parentNode.parentNode.parentNode;

    var title = card.querySelector(".blockquote p").innerText;

    var desc = card.querySelector(".blockquote-footer").innerText;

    var background = card.querySelector(".card-body").getAttribute("data-bg");


    document.getElementById("title").value = title;

    document.getElementById("desc").value = desc;



    cardBg = background;

    var bgImg = document.getElementsByClassName("bgImg");

    for (var i = 0; i < bgImg.length; i++) {

        bgImg[i].className = "bgImg";

        if (bgImg[i].getAttribute("src") == cardBg) {

            bgImg[i].classList.add("selected");

        }

    }



    card.remove();

    document.getElementById("title").focus();

}

