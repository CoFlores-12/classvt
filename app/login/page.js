"use client"
import Image from "next/image"
import "./styles.css"

export default function Login() {
	const handleClick = (e, path) => {
		const username = document.getElementById("12").value;
		const password = document.getElementById("13").value;
		if (username === "" || password === "") {
			return;
		}
		const options = {method: 'POST', body: `{"password":"${username}","username":"${password}"}`};

		fetch('/api/login', options)
		.then(response => location.href = response.url)
		.catch(err => console.error(err));
	  };


    return (
<main className="mainLogin">
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
							<a href="forget-password.html"
								className="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline">Forgot
								password?</a>
							<button onClick={(e) => handleClick(e, "/")}
                            className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Login
                            now</button>

							

				</div>
			</div>
</main>
    )}
