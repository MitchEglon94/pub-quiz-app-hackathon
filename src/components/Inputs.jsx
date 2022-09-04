import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
});

const defaultValues = {
  name: "",
};

function Inputs() {
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const { isDirty, isValid, isSubmitting, errors } = formState;

  const submitFn = (input) => {
    console.log(input);
  };
  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" {...register("name")} />
        {errors.name && (
          <label htmlFor="name" role="alert" className="error">
            {errors.name?.message}
          </label>
        )}
      </div>

      <div>
        <label htmlFor="difficulty">Difficulty: </label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div>
        <label htmlFor="category">Category: </label>
        <select name="category" id="category">
          <option value="9">General Knowledge</option>
          <option value="21">Sport</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="12">Music</option>
          <option value="18">Computers</option>
        </select>
      </div>

      <div>
        <button type="reset" onClick={() => reset()}>
          Clear
        </button>

        <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Inputs;
