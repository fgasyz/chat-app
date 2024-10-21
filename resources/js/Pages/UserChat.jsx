import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FaEllipsisV } from "react-icons/fa";
import { Head } from "@inertiajs/react";
import { act, useEffect, useState } from "react";

export default function UserChat({ alluser }) {
    const [activeChat, setActiveChat] = useState(alluser[0])
    const [message, setMessage] = useState([{
        id: null, msg: null
    }
    ]);

    const handleInputMessage = (message) => {
        setMessage((prev) => {})
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Chat
                </h2>
            }
        >
            <Head title="Chat" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col sm:flex-row  gap-y-10 gap-x-2">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800  md:w-2/5 h-[600px] w-full">
                        <div className="p-6 text-gray-900 dark:text-gray-100 dark:bg-gray-800 overflow-y-auto  h-full">
                            <p className="mt-1 text-md text-gray-600 dark:text-gray-400">
                                All Users
                            </p>
                            {alluser.map(function (value, index) {
                                return (<div className="border-b-[0.1px] border-gray-700" key={index} onClick={() => setActiveChat(value)}>
                                <div className="flex items-center p-4">
                                    <img
                                        src={value.avatar}
                                        alt=""
                                        className="h-14 w-14 flex-none rounded-full"
                                    />
                                    <div className="ml-4 flex-auto">
                                        <div className="flex justify-between">
                                            <div className="font-medium">
                                                {value.name}
                                            </div>
                                            <div className="font-medium text-[12px]">
                                                21.09
                                            </div>
                                        </div>
                                        <div className="mt-1 flex items-center justify-between text-slate-300">
                                            <p>are you ok?</p>
                                            <div className="text-sm dark:text-gray-900 bg-green-500 rounded-full w-5 text-center">
                                            <p>10</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>)
                            } )}
                        </div>
                    </div>
                    <div className={"flex flex-col md:w-3/5 w-full gap-2"}>
                        <div className="dark:bg-gray-800 flex items-center justify-between sm:rounded-lg px-3 py-2">
                            <div className="flex items-center gap-x-2">
                                <img
                                    src={activeChat.avatar}
                                    alt=""
                                    className="h-14 w-14 flex-none rounded-full"
                                />
                                <div className="flex flex-col">
                                    <h5 className="text-gray-100">
                                        {activeChat.name}
                                    </h5>
                                    <p className="text-green-500">online</p>
                                </div>
                            </div>
                            <FaEllipsisV color="white" />
                        </div>

                        <div className=" bg-white shadow-sm sm:rounded-lg dark:bg-gray-800  w-full ">
                            <div className="p-6 text-gray-900 dark:text-gray-100 overflow-y-auto h-[600px] relative">
                                <div className="bg-white w-fit mx-auto rounded-md px-5">
                                    <p className=" text-sm my-2 dark:text-gray-900">Yesterday</p>
                                </div>
                                {
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="bg-green-500 p-2 text-sm rounded-lg w-fit">
                                            <p>Hello ?</p>
                                        </div>
                                        <div className="bg-green-500 p-2 text-sm rounded-lg w-fit">
                                            <p>How are u today ?</p>
                                        </div>
                                    </div>
                                }
                                {
                                    <div className="flex flex-col items-start gap-2">
                                        <div className="bg-white p-2 text-sm rounded-lg w-fit">
                                            <p className="text-gray-900">
                                                Hello ?
                                            </p>
                                        </div>
                                        <div className="bg-white p-2 text-sm rounded-lg w-fit">
                                            <p className="text-gray-900">
                                                How are u today ?
                                            </p>
                                        </div>
                                    </div>
                                }
                                <div className="absolute left-0 bottom-6 w-full px-6 flex">
                                    <input
                                        id="message" 
                                        type="text"
                                        name="message"
                                        rows="1"
                                        maxLength="250" onChange={(e) => console.log(e.target.value)}
                                        placeholder="Input message..."
                                        className="block w-[85%]  rounded-tl-md rounded-bl-md border-0 py-2.5 shadow-sm overflow-hidden dark:bg-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></input>
                                    <button className="bg-indigo-800 p-1.5 w-[15%] rounded-tr-md rounded-br-md">
                                        send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
