function Greating() {

    return (
        <>
            <div className="grid grid-col-1">
                <div className="content-end">
                    <h1 className="stat-value">Vibe</h1>
                    <p className="mt-2">
                        The internet’s source for visuals. <br />
                        Powered by creators everywhere.
                    </p>
                    <div className="card-actions mt-3">
                        {/* <button className="btn btn-primary btn-md">Submit to ...</button> */}
                        {/* <div className="dropdown dropdown-right dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 bg-primary">Click</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div> */}
                        <div className="dropdown dropdown-right dropdown-end">
                            <button tabIndex={0} className="btn btn-primary btn-md">Submit to ...</button>
                            <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Greating