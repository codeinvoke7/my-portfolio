import { LinkedinIcon } from "../../asset";

const HeaderFooter = () => {
  return (
    <div className="d-flex">
      <h5 className="text-white flex-grow-1 p-4"><i> elijahndibe</i></h5>
      <div className="p-4">
        <a href="https://www.linkedin.com/in/elijah-ndibe-28898416a">
          <img src={LinkedinIcon} alt="linkedin-logo" width="30px" />
        </a>
      </div>
    </div>
  );
};

export default HeaderFooter;
