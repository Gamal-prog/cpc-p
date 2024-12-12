import React from 'react';

const Profile = () => {
    return (
        <div className="bg-gray-100 w-full ">
            {/* Основной контейнер */}
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden size-full">
                {/* Верхняя часть с аватаром */}
                <div className="p-6 flex flex-col h-80 items-center justify-center">
                    <div className="flex gap-4">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-32 h-32 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                        </div>
                    </div>
                    <div className="items-center">
                        <h1 className="text-3xl font-semibold mt-4">guest guest</h1>
                        <p className="text-gray-500 text-center">
                            Download free, beautiful high-quality photos curated by guest.

                        </p>
                        <button className="btn btn-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                            Edit
                        </button>
                    </div>
                    </div>

                </div>

                {/* Навигация */}
                <div className="place-items-start">
                    <div role="tablist" className="tabs tabs-bordered">
                        <a role="tab" className="tab">Tab 1</a>
                        <a role="tab" className="tab tab-active">Tab 2</a>
                        <a role="tab" className="tab">Tab 3</a>
                    </div>
                </div>
                <hr/>
                {/* Контент */}
                <div className="p-6 text-center">
                    <div className="border border-dashed border-gray-300 rounded-lg p-40">

                        <p className="text-gray-500">No content available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;