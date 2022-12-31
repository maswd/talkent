import React from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
// import { useSelector } from 'react-redux';

const Profile = ({ mobileProfileOpen, setMobileProfileOpen, children }) => {
	// const user = useSelector((state) => state.user);
	// var size = Object.keys(user).length;

	return (
		<div className="h-[85vh]">
			<div className="flex bg-gradient-to-br shadow from-[#F9A826]/80 to-[#F9A826]/70  w-full flex-col rounded-md justify-center items-center py-3 mb-8 ">
				<img
					// src={`http://192.168.126.34:3000${user.path}`}
					src={require('file:///C:/Users/maswd/Downloads/avatar541891738.jpg')}
					alt="profile"
					className="object-cover h-16 w-16 rounded-full border"
				/>
				<div className="space-y-2 text-center my-5">
					<p className="text-gray-800">
						{/* {size > 0 && user.user.user.profile.firstName} {size > 0 && user.user.profile.lastName} */}
						مسعود گرگانی
					</p>
					<small className="text-xs text-gray-700 font-thin font-sans">
						{/* {size > 0 && user.user.user.phone} */}
						09159594376
					</small>
				</div>
			</div>
			{children}
			<Transition.Root show={mobileProfileOpen} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden w-1/2" onClose={setMobileProfileOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Dialog.Panel className="relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
								<div className="flex items-center justify-between px-4">
									<h2 className="text-lg font-medium text-gray-900">پروفایل</h2>
									<button
										type="button"
										className="mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
										onClick={() => setMobileProfileOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								<div className="flex w-full flex-col justify-center items-center py-3  border-b">
									<img
										// src={`${size > 0
										// 	? 'http://192.168.120.34:3000${user.path}'
										// 	: 'https://i.pravatar.cc/32'}`}
										alt="profile"
										className=" object-cover h-14 w-14 rounded-full border"
									/>
									<div className="space-y-2 text-center my-5">
										<p className=" text-gray-800">
											{/* {size > 0 && user.user.profile.firstName}{' '}
											{size > 0 && user.user.profile.lastName} */}
											{/* {size > 0 && user && user.user.profile.firstName} */}
										</p>
										<small className="text-xs text-gray-700 font-thin font-sans">
											{/* {size > 0 && user.user.phone} */}
										</small>
									</div>
								</div>
								<div className="p-2">{children}</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};

export default Profile;
