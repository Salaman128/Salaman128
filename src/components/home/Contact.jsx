import React from 'react';
import emailjs from 'emailjs-com';
import { Snackbar, Stack } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function Contact() {
    var [mailSent, setMailSent] = React.useState(false)
    var [mailError, setMailError] = React.useState(false)
    const seviceId = "service_id";
    const templateId = "template_web";
    const userId = "user_ZjgA0wzbPaunvALyybRfw";

    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const phoneRef = React.useRef();
    const subjectRef = React.useRef();
    const messageRef = React.useRef();

    function resetRefs(){
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setMailSent(false);
        setMailError(false);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.send(seviceId, templateId, {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        },
        userId)
        .then((result) => {
            console.log(result.text);
            setMailSent(true);
            resetRefs();
        }, (error) => {
            console.log(error.text);
            setMailError(true);
        });
    }
    return (
        <div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar 
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={mailSent} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Thanks! I'll try to reply within today.
                    </Alert>
                </Snackbar>
                <Snackbar 
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={mailError} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Unexpected error occured!.
                    </Alert>
                </Snackbar>
            </Stack>

            <div className="container my-5 text-center">
            <h2>Contact Me</h2>
                <form className="row m-5" onSubmit={sendEmail}>
                    <div className="col-lg-6 col-md-12">
                    <div class="mb-3">
                        <input 
                        type="text" 
                        class="form-control" 
                        name="name" 
                        placeholder="Name"
                        required
                        ref={nameRef}
                        />
                    </div>
                    <div class="mb-3">
                        <input 
                        type="email" 
                        class="form-control" 
                        name="email" 
                        placeholder="Email"
                        required
                        ref={emailRef}
                        />
                    </div>
                    <div class="mb-3">
                        <input 
                        type="phone" 
                        class="form-control" 
                        name="phone" 
                        placeholder="Phone Number"
                        required
                        ref={phoneRef}
                        />
                    </div>
                    <div class="mb-3">
                        <input 
                        type="text" 
                        class="form-control" 
                        name="subject" 
                        placeholder="Subject"
                        required
                        ref={subjectRef}
                        />
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <div class="mb-3">
                        <label 
                        for="message" 
                        class="form-label">Your Message</label>
                        <textarea 
                        class="form-control" 
                        name="message" 
                        rows="3"
                        required
                        ref={messageRef}
                        placeholder='Hi, ...'
                        >
                        </textarea>
                    </div>
                    <div className="mb-3">
                    <button class="btn btn-primary btn-dark" type="submit">Send</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
