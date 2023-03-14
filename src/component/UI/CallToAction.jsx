import classes from "./CallToAction.module.css";

const CallToAction = (props) => {
  return (
    <h6 className="pt-4">
      <a
        href={props.link}
        className={`${classes.actionlink} ${props.className} text-white`}
      >
        {props.children}
      </a>
    </h6>
  );
};

export default CallToAction;
