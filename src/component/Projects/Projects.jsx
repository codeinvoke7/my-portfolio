import { Fragment } from "react";
import { Dspatch, Dvic, Paystack, Oscsa, NotificationPage } from "../../asset";
import CallToAction from "../UI/CallToAction";
import classes from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      image: Dspatch,
      name: "Dspatch Courier Services",
      lang: "React.js, CSS, Material UI",
      viewCode: "View Code",
      viewSite: "View Site",
      githubLink: "",
      siteLink: "https://dspatch.vercel.app/",
    },
    {
      id: 2,
      image: Dvic,
      name: "Dvic Consulting Ltd",
      lang: "HTML, CSS, Js",
      viewCode: "View Code",
      viewSite: "View Site",
      githubLink: "https://github.com/codeinvoke7/Dvic-company-project",
      siteLink: "https://dvicconsults.netlify.app/",
    },
    {
      id: 3,
      image: Paystack,
      name: "Paystack Fintech Company",
      lang: "HTML, CSS, Js, Bootstrap",
      viewCode: "View Code",
      viewSite: "View Site",
      githubLink: "https://github.com/codeinvoke7/Paystack-website-clone",
      siteLink: "https://paystackclonesite.netlify.app/",
    },
    {
      id: 4,
      image: Oscsa,
      name: "Oscsa OpenSource Website",
      lang: "HTML, CSS, Js, Bootstrap",
      viewCode: "View Code",
      viewSite: "View Site",
      githubLink: "https://github.com/codeinvoke7/Refactor_OSCSA_Website-",
      siteLink: "https://oscsa-subpage.netlify.app/",
    },
    {
      id: 5,
      image: NotificationPage,
      name: "Notification Page",
      lang: "React.js, CSS,",
      viewCode: "View Code",
      viewSite: "View Site",
      githubLink: "https://github.com/codeinvoke7/notificationPage",
      siteLink: "https://notificationpg.netlify.app/",
    },
  ];
  const projects = [];
  for (const project of projectList) {
    projects.push(
      <div className={`col text-white mb-3 ${classes.cont}`} key={project.id}>
        <img id={classes.img} src={project.image} alt="" />
        <div className={`${classes.overlay} d-flex justify-content-evenly`}>
          <CallToAction className={classes["call-to-action"]} link={project.githubLink}>
            {project.viewCode}
          </CallToAction>
          <CallToAction className={classes["call-to-action"]} link={project.siteLink}>
            {project.viewSite}
          </CallToAction>
        </div>
        <h6 className="pt-2">{project.name}</h6>
        <p style={{ fontSize: "12px" }}>{project.lang}</p>
      </div>
    );
  }
  return (
    <Fragment>
      <div className=" container ">
        <div className="d-flex p-4">
          <h1 className="flex-grow-1 text-white">Projects</h1>
          <div>
            <CallToAction link="https://wa.me/+2348141289176">
              CONTACT ME
            </CallToAction>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-4 ">
          {projects}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
