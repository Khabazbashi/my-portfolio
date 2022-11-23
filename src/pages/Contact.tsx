import addadata from "../data/data.json";

const Contact = () => {
  return (
    <div className="flex flex-col h-[93%] text-center align-center justify-center px-4">
      <h1 className="text-center text-4xl font-bold pb-5 text-[#0f1e2d] xl:text-5xl">
        {addadata.contact.title}
      </h1>
      <div className="flex flex-row justify-center">
        <a
          href={addadata.contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./github.png"
            className="social-icon w-auto h-20 m-5 rounded-full 3xl:h-28"
            alt="githubicon"
          />
        </a>
        <a
          href={addadata.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./linkedin.png"
            className="social-icon w-auto h-20 m-5 rounded-full 3xl:h-28"
            alt="linkedinicon"
          />
        </a>
        <a
          href={addadata.contact.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./email.png"
            className="social-icon w-auto h-20 m-5 rounded-full 3xl:h-28"
            alt="emailicon"
          />
        </a>
      </div>
    </div>
  );
};
export default Contact;
