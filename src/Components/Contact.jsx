import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        axios
            .post("https://getform.io/f/b48711a4-f678-489f-9f2f-15c3e5e246d1", {
                name,
                email,
                message
            },
                { headers: { 'Accept': 'application/json' } })
            .then(res => {
                if (res.data.success === true) {
                    toast.success('Message Successfully Send!')
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
        form.reset();
    }

    return (
        <div>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                contact
            </p>
            <div name='contact' className='w-full md:h-screen bg-[#0a192f] flex justify-center items-center px-4'>
                <form
                    className='flex flex-col max-w-[600px] w-full'
                    onSubmit={handleSubmit}
                >
                    <div className='pb-2 flex flex-col justify-center w-full h-full items-center'>
                        <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                        <p className='text-gray-300 pb-4'>Send me a message</p>
                    </div>
                    <input required className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                    <input required className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                    <textarea required className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <button type='submit' className='text-white border-2 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Sand A Massage</button>
                </form>
            </div>
        </div>

    )
}
export default Contact