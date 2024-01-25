
// import { Sample } from "./component/Sample";
// import {Example} from './component/Example';
// import { Redirect, Route } from "react-router-dom";
// import { Home } from "./component/Sample";
// import { Post } from "./component/Post";
// import { Example } from "./component/Example";
import Github_profile from "./Github_profile_Finder/Github_profile";
import { Qr_gen } from "./Qr_generator/Qr_gen";


function App() {
  return (
    
    <div className="App">
      {/* <Route path="/"  component={Home}/>
      <Redirect from="/message" to="/post"/>
      <Route path='/post' component={Example}/>
      <Route path="/not-found" component={Post}/>
      
      <Redirect to="/not-found"/> */}
   {/* <Example/>
      <Sample/> */}
      <Github_profile/>
      {/* <Qr_gen/> */}

    </div>
  );
}

export default App;
