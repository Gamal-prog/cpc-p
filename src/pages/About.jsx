import React from "react";
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">

                    <div>
                        <h1 className="text-5xl font-bold mb-4">Visuals for everyone</h1>
                        <p className="text-gray-600 mb-6">
                            Over 6 million free high-resolution photos and illustrations brought to you by the world’s most generous community of contributors.
                        </p>
                        <Link to="/">
                            <button className="btn btn-primary">
                                Start Browsing
                            </button>
                        </Link>

                    </div>
                    <div>
                        <img
                            src="https://unsplash-assets.imgix.net/marketing/about-header-01.jpg?auto=format&fit=crop&q=60"
                            alt="About"

                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-12 px-6 ">
                    {/* Верхний блок */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                        <img
                                src="https://fotoblik.ru/wp-content/uploads/2023/09/krasivye-kartinki-so-smyslom-3.webp"
                                alt="About"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-4">Is it really free? Yes.</h1>
                            <p className="text-gray-600 mb-6">
                                Unsplash is a platform powered by an amazing community that has
                                gifted hundreds of thousands of their own images to fuel
                                creativity around the world. So sign up for free, or don’t. Either
                                way, you’ve got access to over 6 million photos and illustrations
                                under the Unsplash license—which makes them free to
                                do-whatever-you-want with.
                            </p>
                            <button className="btn btn-primary">
                                    Learn more about the Unsplash License
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="max-w-7xl mx-auto py-12 px-6">
                    {/* Средний блок */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold">Fuelling your favourite platforms</h2>
                        <p className="text-gray-600 mt-4">
                            With partners like BuzzFeed, Squarespace and Trello being powered by
                            our API, the Unsplash library is more widely accessible than ever.
                        </p>
                    </div>

                    {/* Нижний блок */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Make something awesome</h2>
                            <p className="text-gray-600 mb-6">
                                Unsplash was born from the pain we had in finding great, usable
                                imagery. And we weren’t alone. Which is why, today—millions of
                                creators from around the world have downloaded over 7 billion
                                Unsplash photos and illustrations to create presentations,
                                artwork, mockups, and more.
                            </p>
                            <button className="btn btn-primary">Find the perfect visual</button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Example 1"
                                className="rounded-lg shadow-md"
                            />
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Example 2"
                                className="rounded-lg shadow-md"
                            />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7f2vsztlzkrjkivm60Ql2LHQrrcYPaRWCw&s"
                                alt="Example 3"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </>
            );
            };

            export default About;