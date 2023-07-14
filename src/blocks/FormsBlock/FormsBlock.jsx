import "./FormsBlock.css";

const FormsBlock = () => {
  return (
    <div className="FormsBlock" id="forms">
      <div className="forms-title">
        <span className="forms-title-1">Let’s get started</span>
        <span className="forms-title-2">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </span>
      </div>
      <div className="forms">
        <div className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" id="name" name="Name" />
        </div>
        <div className="form">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="text" id="email" name="Email" />
        </div>
        <div className="form">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea type="text" id="message" name="Message" />
        </div>
        <div className="form-btn">Let’s get started</div>
      </div>
    </div>
  );
};

export default FormsBlock;
