import React from 'react';

const Profile = () => {
    return (
        <div className="bg-gray-100 w-full ">
            {/* Основной контейнер */}
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden size-full">
                {/* Верхняя часть с аватаром */}
                <div className="p-6 flex flex-col items-center">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <h1 className="text-xl font-semibold mt-4">guest guest</h1>
                    <p className="text-gray-500 text-center">
                        Download free, beautiful high-quality photos curated by guest.
                    </p>
                    <div className="mt-4">
                        <span className="text-sm text-gray-500">Not available for hire</span>
                    </div>
                </div>
                <hr />
                {/* Навигация */}
                <div className="place-items-start">


                <div role="tablist" className="tabs tabs-lifted">
                    <a role="tab" className="tab">Tab 1</a>
                    <a role="tab" className="tab tab-active">Tab 2</a>
                    <a role="tab" className="tab">Tab 3</a>
                </div>
                </div>
                {/* Контент */}
                <div className="p-6 text-center">
                    <div className="border border-dashed border-gray-300 rounded-lg p-4q
                    0">
                        <p className="text-gray-500">No content available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;