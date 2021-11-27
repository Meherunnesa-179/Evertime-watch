import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import './AddReview.css'

const AddReview = () => {
  const { register, handleSubmit} = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("https://guarded-inlet-45451.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h1>Review</h1>
      <img
            style={{
                borderRadius: "50%",
              }}
              src={user?.photoURL}
              alt="profile picture"
            />
      <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          defaultValue={user?.displayName}
          type="text"
          {...register("name", { required: true })}
        />
       
        <input
          className="input-field"
          name="email"
          defaultValue={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
          <input 
          className="input-field"
           type="number"
           placeholder="Ratings.........(0-5)"
            {...register("number", { required: true, maxLength: 1 })} />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
         <input
          className="input-field"
          name="url"
          defaultValue={user?.photoURL}
          type="url"
          {...register("url")}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
