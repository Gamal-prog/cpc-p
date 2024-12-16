import React from 'react';

const UserCollections = () => {
    const collections = [
        {
            id: 1,
            title: 'Girls',
            mainImage: 'https://images.unsplash.com/photo-1709672262859-68cb9b39ae4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDYwMDIyfHxlbnwwfHx8fHw%3D',
            subImages: [
                'https://images.unsplash.com/photo-1705343573351-09226424c8da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDYwMDIyfHxlbnwwfHx8fHw%3D',
                'https://images.unsplash.com/photo-1631044061938-528e3df26ec9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMDYwMDIyfHxlbnwwfHx8fHw%3D',
            ],
        },
        {
            id: 2,
            title: 'Cityscapes',
            mainImage: 'https://images.unsplash.com/photo-1627894566254-cd378c294561?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMDYwMDIyfHxlbnwwfHx8fHw%3D',
            subImages: [
                'https://images.unsplash.com/photo-1624554684051-253f1d10ecee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMDYwMDIyfHxlbnwwfHx8fHw%3D',
                'https://images.unsplash.com/photo-1615439633887-d9057a488f35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTA2MDAyMnx8ZW58MHx8fHx8',
            ],
        },
        {
            id: 3,
            title: 'Usama Bin Laden',
            mainImage: 'https://images.unsplash.com/photo-1613745699126-7151786b8914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTE3OTE4fHxlbnwwfHx8fHw%3D',
            subImages: [
                'https://images.unsplash.com/photo-1615656850442-e6fa34e3cf8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTE3OTE4fHxlbnwwfHx8fHw%3D',
                'https://images.unsplash.com/photo-1626639900776-4011102c8712?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTE3OTE4fHxlbnwwfHx8fHw%3D',
            ],
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
                <div key={collection.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Контейнер для основного изображения и подфотографий */}
                    <div className="flex flex-col md:flex-row">
                        {/* Основное изображение */}
                        <div className="relative md:w-2/3 flex-1">
                            <div className="w-full h-[300px] md:h-full">
                                <img
                                    src={collection.mainImage}
                                    alt={collection.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                <h3 className="text-white text-lg font-bold">{collection.title}</h3>
                            </div>
                        </div>

                        {/* Подфотографии справа */}
                        <div className="flex flex-col justify-between md:w-1/3 h-[1000px] md:h-full">
                            {collection.subImages.map((subImage, index) => (
                                <div key={index} className="flex-1">
                                    <img
                                        src={subImage}
                                        alt={`${collection.title} - ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserCollections;