import Image from "next/image";
import Link from "next/link";

export default function page() {
	return (
		<section>
			<div className="flex h-screen">
				<div className="hidden md:w-7/12 lg:flex lg:w-3/5">
					<Image
						className="w-full object-cover object-center"
						src="https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
						alt=""
                        width={1000}
                        height={1000}
					/>
				</div>
				<div className="mx-auto flex w-10/12 flex-col justify-center pt-4 sm:w-10/12 lg:w-2/5">
					<div className="mx-auto flex justify-start">
						<div className="w-full rounded-lg bg-white md:mt-0 md:max-w-md xl:p-0">
							<Link  href="/" className="bg-slate-40 flex justify-center">
								LOGO
							</Link>
							<div className="space-y-4 p-6 sm:p-8 md:space-y-4">
								<h1 className="text-center text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
									Log in
								</h1>
								<form
									className="space-y-4 md:space-y-6"
									action="#"
								>
									<div>
										<label
											htmlFor="email"
											className="mb-2 block text-sm font-medium text-black"
										>
											Email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											className="focus:ring-primary-600 focus:text-black block w-full rounded-lg border bg-gray-50 p-2.5  dark:border-gray-600 dark:text-white text-black dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
											placeholder="name@company.com"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="mb-2 block text-sm font-medium text-black"
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											className="focus:ring-primary-600 f focus:text-black  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
											required
										/>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-start">
											<div className="flex h-5 items-center">
												<input
													id="remember"
													aria-describedby="remember"
													type="checkbox"
													className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-blue-600"
													required
												/>
											</div>
											<div className="ml-3 text-sm">
												<label
													htmlFor="remember"
													className="text-black"
												>
													Remember me
												</label>
											</div>
										</div>
										<a
											href="#"
											className="text-sm font-medium text-blue-600 hover:underline"
										>
											Forgot password?
										</a>
									</div>
									<button
										type="submit"
										className="hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
									>
										Sign in
									</button>
									<p className="text-center text-sm font-light text-black">
										Don’t have an account yet?{" "}
										<a
											href="#"
											className="font-bold text-blue-600 hover:underline"
										>
											Sign up
										</a>
									</p>
								</form>
							</div>
							<div className="mx-auto w-4/5 pb-2 text-center text-sm">
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Saepe ullam iure aliquam
									nemo consequuntur eos aut accusamus ratione
									nobis vel quae velit voluptatem laboriosam
									quibusdam ea, dolor repellendus accusantium
									ad.
								</p>
								<h1 className="">
									Powered By{" "}
									<span className="text-lg font-bold">
										True Devs
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
