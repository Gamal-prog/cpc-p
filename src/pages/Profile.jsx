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
                            <img src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"/>
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
                        <a role="tab" className="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 24 12">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                            Likes</a>
                        <a role="tab" className="tab tab-active"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half" viewBox="0 0 24 12">
                            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                            Components</a>
                        <a role="tab" className="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 24 12">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"/>
                        </svg>
                            Subscribers</a>
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