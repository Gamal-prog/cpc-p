

function Contact() {

    const username = 'Jojo'

    return (
        <>
        <div className="size-full"> {/* после продумывания работы с Rout* можно будет убрать */}
            <div className="flex justify-center">
            <div className="flex flex-col">
                <h1>Hi {username} how can we help you?</h1>
                <p>Couldn’t find an answer in the Help Center? We’ll start with some <br /> questions and get you to the right place.</p>
                <form>
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
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <textarea className="textarea textarea-bordered textarea-xs w-full h-24" placeholder="Someting"></textarea>
                    </label>
                    <button className="btn btn-primary">Submit request</button>
                    <p>We will do our best to respond to you within 24 business hours.</p>
                </form>
            </div>
            </div>
            </div>
        </>
    );
}

export default Contact