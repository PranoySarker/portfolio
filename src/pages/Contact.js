import React from 'react';

const Contact = () => {
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
                            <div class="form-control">
                                <input type="text" placeholder="Your email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Your subject" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <textarea placeholder="type your message here" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-secondary text-white">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;