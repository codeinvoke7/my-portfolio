import { Fragment } from "react";
import './App.css';
import { ContactForm, Header, Projects, SkillList } from "./component";

function App() {
  return (
    <Fragment>
      {/* <Header /> */}
      <SkillList />
      <Projects />
      <ContactForm />
    </Fragment>
  );
}

export default App;
