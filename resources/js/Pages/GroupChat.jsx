import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FaEllipsisV } from "react-icons/fa";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function GroupChat({allgroup}) {
    const [activeGroup, setActiveGroup] = useState(allgroup[0])
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Group
                </h2>
            }
        >
            <Head title="Chat" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col sm:flex-row  gap-y-10 gap-x-2">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800  md:w-2/5 h-[600px] w-full">
                        <div className="p-6 text-gray-900 dark:text-gray-100 dark:bg-gray-800 overflow-y-auto h-full">
                            <p className="mt-1 text-md text-gray-600 dark:text-gray-400">
                                All Groups
                            </p>
                            {allgroup.map(function (value, index) {
                                return (
                                    <div className="border-b-[0.1px] border-gray-700" key={index} onClick={() => setActiveGroup(value)}
                                    >
                                        <div
                                            className="flex items-center p-4"
                                            key={index}
                                        >
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
                                                <div className="mt-1 text-slate-300">
                                                    Willie : are you ok?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col md:w-3/5 w-full gap-2">
                        <div className="dark:bg-gray-800 flex items-center justify-between sm:rounded-lg px-3 py-2">
                            <div className="flex items-center gap-x-2">
                                <img
                                    src={activeGroup.avatar}
                                    alt=""
                                    className="h-14 w-14 flex-none rounded-full"
                                />
                                <div className="flex flex-col gap-y-2">
                                    <h5 className="text-gray-100">
                                        {activeGroup.name}
                                    </h5>
                                    <div className="flex -space-x-1">
                                        <img
                                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <div className="h-6 w-6 ring-2 ring-white rounded-full bg-white">
                                            <p className="text-[12px] my-1">+10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FaEllipsisV color="white" />
                        </div>
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 w-full">
                            <div className="p-6 text-gray-900 dark:text-gray-100 overflow-y-auto h-[600px] relative">
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
                                        <div className="flex">
                                            <img
                                                src="https://picsum.photos/200/300"
                                                alt=""
                                                className="h-10 w-10 flex-none rounded-full mr-2"
                                            />
                                            <div className="bg-white p-2 text-sm rounded-lg w-fit">
                                                <h6 className="font-bold text-yellow-500">
                                                    Adit
                                                </h6>
                                                <p className="text-gray-900">
                                                    Hello ?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <img
                                                src="https://picsum.photos/200/300"
                                                alt=""
                                                className="h-10 w-10 flex-none rounded-full mr-2"
                                            />
                                            <div className="bg-white p-2 text-sm rounded-lg w-fit">
                                                <h6 className="font-bold text-yellow-500">
                                                    Adit
                                                </h6>
                                                <p className="text-gray-900">
                                                    How are u today ?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="absolute left-0 bottom-6 w-full px-6 flex">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows="1"
                                        className="block w-[85%]  rounded-tl-md rounded-bl-md border-0 py-2.5 shadow-sm overflow-hidden dark:bg-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></textarea>
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

function getListGroup() {
    const data = [];
    for (let i = 0; i < 6; i++) {
        data.push(`https://picsum.photos/200/300?random=${i}`);
    }
    return data;
}
