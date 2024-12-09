import { Link } from "react-router-dom";

function Contact() {
    const isAuthenticated = false;
    const username = 'Jojo'

    return (
        <>
        {/* <div className="size-full"> после продумывания работы с Rout* можно будет убрать */}
            <div className="flex justify-center">
            <div className="flex flex-col">
                <div className="text-center mb-8">
                    {!isAuthenticated ? (
                        <h1 className="text-4xl font-bold mt-10 mb-4">Hi, how can we help you?</h1>
                    ) : (
                        <h1 className="text-4xl font-bold mt-10 mb-4">Hi {username}, how can we help you?</h1>
                    )}
                    <p>Couldn’t find an answer in the <Link className="underline text-gray-400" to="/help-center">Help Center</Link>? We’ll start with some</p>
                    <p>questions and get you to the right place.</p>
                </div>
                {!isAuthenticated ? (
                    <div className="text-center">
                        <p><Link className="underline text-gray-400" to="/login">Log in</Link> to get personalized support.</p>
                    </div>
                ) : (
                <form className="space-y-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Username</span>
                        </div>
                        <input type="text" placeholder="Username" className="input input-bordered w-full input-sm" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="Email" className="input input-bordered w-full input-sm" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Reason</span>
                        </div>
                        <select className="select select-bordered select-sm w-full">
                            <option disabled selected>Please select</option>
                            <option>Account details and settings</option>
                            <option>Licensing and usage</option>
                            <option>Vibe API</option>
                            <option>Contributing content</option>
                            <option>Bugs and site issues</option>
                            <option>Something else</option>
                        </select>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <textarea className="textarea textarea-bordered textarea-xs w-full h-24" placeholder="Someting"></textarea>
                    </label>
                    <button className="btn btn-primary">Submit request</button>
                    <p className="text text-sm">We will do our best to respond to you within 24 business hours.</p>
                </form>
                )}
            </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Contact