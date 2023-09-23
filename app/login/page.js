import Image from "next/image"
import "./styles.css"

export default function Login() {

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
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                            </div>
						</div>
						<div className="mt-6 ">
							<label htmlFor="" className="text-neutral-600 text-base font-normal">Password :</label>
							<div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
								<input type="password" name="" placeholder="" id="13"
                                    className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none" />
                            </div>
							</div>
							<a href="forget-password.html"
								className="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline">Forgot
								password?</a>
							<button
                            className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">Login
                            now</button>

							

				</div>
			</div>
</main>
    )}