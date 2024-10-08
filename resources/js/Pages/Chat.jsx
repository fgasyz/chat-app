import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FaEllipsisV } from "react-icons/fa";
import { Head } from "@inertiajs/react";

export default function Chat() {
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
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col sm:flex-row h-[76vh] gap-y-10 gap-x-2">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800  md:w-2/5  w-full">
                        <div className="p-6 text-gray-900 dark:text-gray-100 dark:bg-gray-800 overflow-y-auto h-full">
                            <p className="mt-1 text-md text-gray-600 dark:text-gray-400">
                                Online
                            </p>
                            {getListUser().splice(0, 2).map((value, index) => (
                                <div class="flex items-center p-4" key={index}>
                                    <img
                                        src={value}
                                        alt=""
                                        class="h-14 w-14 flex-none rounded-full"
                                    />
                                    <div class="ml-4 flex-auto">
                                        <div className="flex justify-between">
                                            <div class="font-medium">
                                                Leonard Krasner
                                            </div>
                                            <div class="font-medium text-[12px]">
                                                21.09
                                            </div>
                                        </div>
                                        <div class="mt-1 text-slate-300">
                                            are you ok?
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <p className="mt-1 text-md text-gray-600 dark:text-gray-400">
                                Offline
                            </p>
                            {getListUser().map((value, index) => (
                                <div class="flex items-center p-4" key={index}>
                                    <img
                                        src={value}
                                        alt=""
                                        class="h-14 w-14 flex-none rounded-full"
                                    />
                                    <div class="ml-4 flex-auto">
                                        <div className="flex justify-between">
                                            <div class="font-medium">
                                                Leonard Krasner
                                            </div>
                                            <div class="font-medium text-[12px]">
                                                21.09
                                            </div>
                                        </div>
                                        <div class="mt-1 text-slate-300">
                                            are you ok?
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col md:w-3/5 w-full gap-2">
                        <div className="dark:bg-gray-800 flex items-center justify-between sm:rounded-lg px-3 py-2">
                            <div className="flex items-center gap-x-2">
                                <img
                                    src="https://picsum.photos/200/300"
                                    alt=""
                                    class="h-14 w-14 flex-none rounded-full"
                                />
                                <div className="flex flex-col">
                                    <h5 className="text-gray-100">
                                        Leonard Krasner
                                    </h5>
                                    <p className="text-green-500">online</p>
                                </div>
                            </div>
                            <FaEllipsisV color="white" />
                        </div>

                        <div className=" bg-white shadow-sm sm:rounded-lg dark:bg-gray-800   h-[95%] w-full">
                            <div className="p-6 text-gray-900 dark:text-gray-100 overflow-y-auto h-full relative">
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
                                <div class="absolute left-0 bottom-6 w-full px-6 flex">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows="1"
                                        class="block w-[85%]  rounded-tl-md rounded-bl-md border-0 py-2.5 shadow-sm overflow-hidden dark:bg-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

function getListUser() {
    const data = [];
    for (let i = 0; i < 5; i++) {
        data.push("https://picsum.photos/200/300");
    }
    return data;
}
