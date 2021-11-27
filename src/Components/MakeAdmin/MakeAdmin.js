import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    fetch("https://guarded-inlet-45451.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
       <h1>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field"
              name="email"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <br />

            <input
              className="submit-btn btn btn-success mt-3"
              type="submit"
              value="Register as Admin"
            />
        </form>
    </div>
  );
};

export default MakeAdmin;
