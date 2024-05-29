import './App.css';
import jss from 'jss'
import preset from "jss-preset-default";

jss.setup(preset());

const styles = {
  titlebody: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "2rem",
  },

  title: {
    color: "#ffffff",
    textAlign: "center",

    border: "2px solid",
    borderRadius: "15px",
    borderColor: "rgb(14 165 233)",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    width: "40%",
  },

  text: {
    color: "#ffffff",
    margin: "auto",
  },

  tailwindimage: {
    minWidth: "15rem",
    maxWidth: "15rem",
  },

  jssimage: {
    minWidth: "15rem",
    maxWidth: "15rem",
  },

  fillertextbox: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    marginLeft: "24rem",
    marginRight: "24rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",

    color: "#ffffff",
  },

  bottomtext: {
    color: "#ffffff",
    textAlign: "center",
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

function App() {
  return (
    <div className="App">
      <header className={classes.titlebody}>
        <h2 className={classes.text}>
          Home
        </h2>
        <h1 className={classes.title}>
          This is my JSS Test
        </h1>
        <h2 className={classes.text}>
          Contact
        </h2>
      </header>
      <div className={classes.fillertextbox}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="Logo" className={classes.tailwindimage} />
        <div className="">
          This is Tailwind CSS. Tailwind css is a framework technique used for styling difficult styles with simple and ready to use predefined styling.
        </div>
      </div>

      <div className={classes.fillertextbox}>
        <div className="">
          This is JSS. JSS is a simpler styling technique based around the normal css syntax, but changed to be way more similar to the standard JavaScript syntax.
        </div>
        <img src="https://avatars.githubusercontent.com/u/9503099?s=280&v=4" alt="Logo" className={classes.jssimage} />
      </div>

      <div className={classes.bottomtext}>
        <p>This site does not have too much going on for it, since it is more of a dummy site to test Tailwinds functionalities and how it works compared to JSS in the long run.</p>
      </div>
    </div>
  );
}

export default App;
