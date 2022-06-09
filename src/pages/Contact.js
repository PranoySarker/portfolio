import React from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_2tevw8g', 'template_dz4pnph', e.target, '1MT23fNVdrikUTn8T')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className='mt-5'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse gap-x-36">
                    <div class="text-center lg:text-left w-96">
                        <h1 class="text-4xl">Any Query?</h1>
                        <p class="py-6">If you have any query or want to contact me.feel free to send me a message.I'll try to catch you asap.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={sendEmail}>
                                <div class="form-control mb-3">
                                    <input type="text" name='email' placeholder="Your email" class="input input-bordered" required />
                                </div>
                                <div class="form-control mb-3">
                                    <input type="text" name='name' placeholder="Your Name" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <textarea placeholder="type your message here" name='message' class="input input-bordered" required />
                                </div>
                                <div class="form-control mt-6">
                                    <input type="submit" className='btn btn-secondary text-white' value="Message Me" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;