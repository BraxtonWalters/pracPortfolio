import emailjs from "@emailjs/browser";

const modal = () => {
    const modal = document.querySelector(".modal");
    const openModalBtn = document.querySelectorAll(".open_model");
    const closeBtn = document.querySelector(".close_modal");
    const sendMessage = document.getElementById("sendMessage");
    const body = document.getElementById("body");

    openModalBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = 'block';
            
        })
    })

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })

    body.addEventListener("click", (e) => {
        if (e.target.classList[0] === "modal") {
            modal.style.display = "none";
        }
    })
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const errorMessage = document.querySelector(".error_message");
    
    const listenerArr = [name, email, subject, message];
    for(const listener of listenerArr) {
        listener.addEventListener('change', () => {
            if(listener.value) {
                document.getElementById(`${listener.id}Label`).classList.add("filled_input")
            } else {
                document.getElementById(`${listener.id}Label`).classList.remove("filled_input")
            }
        });
    }

    sendMessage.addEventListener("submit", (e) => {
        e.preventDefault();
        const templateParams = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }

        if(name.value.length < 1 || email.value.length < 1 || subject.value.length < 1 || message.value.length < 1) {
            errorMessage.style.display = "block";
            console.log("finish the form man");
        } else {
            errorMessage.style.display = "none";
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
                .then((res) => {
                    console.log("ladies and gentlemen we got em", res.status, res.text);
                })
                .catch((error) => {
                    console.log("oppies whoopies we made a wuckie wuckie", error);
              })
            modal.style.display = "none";
        }
    })
}



export default modal;