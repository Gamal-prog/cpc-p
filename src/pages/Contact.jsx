import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'

function Contact() {
    const isAuthenticated = true;
    const username = 'Jojo'

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
        //logic of working with form data
      };

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
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Username</span>
                            { errors.username && <span className="label-text-alt text-error">{errors.username.message}</span> }
                        </div>
                        <input 
                            type="text" 
                            placeholder="Username" 
                        // className="input input-bordered w-full input-sm" 
                            className={`input input-bordered input-sm w-full ${errors.username && "input-error"}`}
                            {...register("username", { required: "Username is required" })}
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                            { errors.email && <span className="label-text-alt text-error">{errors.email.message}</span> }
                        </div>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            // className="input input-bordered w-full input-sm" 
                            className={`input input-bordered input-sm w-full ${errors.email && "input-error"}`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                                },
                            })}
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Reason</span>
                            {errors.reason && (
                            <span className="label-text-alt text-error">
                                {errors.reason.message}
                            </span>
                            )}
                        </div>
                        <select 
                            className={`select select-bordered select-sm w-full ${errors.reason && "select-error"}`}
                            {...register("reason", { required: "Reason is required" })}
                        >
                            <option disabled selected 
                                value=""
                            >Please select</option>
                            <option
                                value="Account details and settings"
                            >Account details and settings</option>
                            <option
                                value="Licensing and usage"
                            >Licensing and usage</option>
                            <option
                                value="Vibe API"
                            >Vibe API</option>
                            <option
                                value="Contributing content"
                            >Contributing content</option>
                            <option
                                value="Bugs and site issues"
                            >Bugs and site issues</option>
                            <option
                                value="Something else"
                            >Something else</option>
                        </select>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Details</span>
                            {errors.comments && (
                                <span className="label-text-alt text-error">
                                {errors.comments.message}
                                </span>
                            )}
                        </div>
                        <textarea 
                            // className="textarea textarea-bordered textarea-xs w-full h-24" 
                            // placeholder="Someting"
                            className={`textarea textarea-bordered textarea-sm w-full ${
                                errors.comments && "textarea-error"
                              }`}
                              placeholder="Enter your details"
                              {...register("comments", {
                                maxLength: {
                                  value: 250,
                                  message: "Comments cannot exceed 250 characters",
                                },
                              })}
                        ></textarea>
                    </label>

                    <button type="submit" className="btn btn-primary">Submit request</button>
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