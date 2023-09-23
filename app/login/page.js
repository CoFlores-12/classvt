"use client"
import Image from "next/image"
import "./styles.css"
import 'flowbite';
import { initFlowbite } from 'flowbite'
import { Modal } from 'flowbite';


export default function Login() {
	
	const handleClick = (e, path) => {
		const modal1 = document.getElementById('popup-modal');
		const errorRes = document.getElementById("infoModal");
		const modal = new Modal(modal1);
		errorRes.innerHTML = `<div class="text-center">
		<div role="status">
			<svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
				<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
			</svg>
			<span class="sr-only">Loading...</span>
		</div>
	</div>`
		modal.show();
		const username = document.getElementById("12").value;
		const password = document.getElementById("13").value;
		if (username === "" || password === "") {
			return;
		}
		const options = {method: 'POST', body: `{"password":"${username}","username":"${password}"}`};

		fetch('/api/login', options)
		.then(response => response.json())
		.then(response => {
			if (response.data === 400) {
				
				errorRes.innerHTML = `
			<h3 id="errorRes" className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">${response.error}</h3>`
				initFlowbite();
				
				modal.show();
				setInterval(() => {
					modal.hide();
				}, 3000);
				return
			}
			location.href = response.url;
		})
		.catch(err => console.error(err));
	  };


    return (
<main className="mainLogin">
<div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div className="p-6 text-center" id="infoModal">
                
            </div>
        </div>
    </div>
</div>
			<Image 
            src="../next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            />
			<p className="text-center text-neutral-600 text-base font-semibold">Login into your account</p>
			<div className="mt-10">
				<div className="px-10">
					<div className="mt-2 ">
						<label htmlFor="" className="text-neutral-600 text-base font-normal">User:</label>
						<div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
							<input type="text" name="" placeholder="" id="12"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none inputLogin" />
                            </div>
						</div>
						<div className="mt-6 ">
							<label htmlFor="" className="text-neutral-600 text-base font-normal">Password :</label>
							<div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
								<input type="password" name="" placeholder="" id="13"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none inputLogin" />
                            </div>
							</div>
							<a href=""
								className="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline">Forgot
								password?</a>
							<button onClick={(e) => handleClick(e, "/")}
                            className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Login
                            now</button>

							

				</div>
			</div>
</main>
    )}
