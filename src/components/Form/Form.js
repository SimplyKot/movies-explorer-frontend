import "./form.css";

function Form(props) {
  return (
    <form
      className="form__content"
      name={`${props.name}-form`}
      // noValidate
      onSubmit={props.onSubmit}
    >
      <h2 className="form__title">{props.title}</h2>
      {props.children}
    </form>
  );
}

export default Form;
