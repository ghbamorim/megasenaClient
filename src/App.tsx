import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Last from "./features/last/last";
import ClippedDrawer from "./features/menu/menu";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  App: {
    textAlign: "center",
    backgroundColor: "#FDFDD7",
  },

  AppHeader: {
    alignItems: "center",
    justifyContent: "center",
    color: "#DF977E",
  },
  drawer: {
    width: drawerWidth,
    zIndex: 10,
  },
  appBar: {
    zIndex: 2000,
  },
  content: {
    paddingTop: 50,
    paddingLeft: drawerWidth - 40,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <ClippedDrawer classes={classes}></ClippedDrawer>
        <div className={classes.content}>
          <Last></Last>
        </div>
      </header>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
