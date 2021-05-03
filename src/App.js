import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Icons from './pages/Icons';
import Maps from './pages/Maps';
import Notifications from './pages/Notifications';
import Typography from './pages/Typography';
import UserProfile from './pages/UserProfile';
import TableList from './pages/TableList';
import { theme } from "./Theme";
import { ThemeContext } from "./Provider";
const getStyles = (mode) => ({
  app: {
    height: "100%",
    width: "100%",
    backgroundColor: theme[mode].backgroundColor
  },

  theme: {
    color: theme[mode].highlight
  }
});
function App() {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);


  return (
    <>
      <div style={styles.app}>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/icons' component={Icons} />
            <Route path='/maps' component={Maps} />
            <Route path='/typography' component={Typography} />
            <Route path='/notifications' component={Notifications} />
            <Route path='/user' component={UserProfile} />
            <Route path='/table' component={TableList} />

          </Switch>
        </Router>

      </div>



    </>

  );
}

export default App;
