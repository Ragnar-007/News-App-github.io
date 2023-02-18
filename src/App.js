

import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar/>
//         <News setProgress={this.setProgress}  pageSize={5} country="in" category="science"/>
//         <Routes>
//            <Route path="/"><News setProgress={this.setProgress}  pageSize={5} country="in" category="general"/> </Route>
//            <Route path="/business"><News setProgress={this.setProgress}  pageSize={5} country="in" category="business"/> </Route>
//            <Route path="/entertainment"><News setProgress={this.setProgress}  pageSize={5} country="in" category="entertainment"/> </Route>
//            <Route path="/general"><News setProgress={this.setProgress}  pageSize={5} country="in" category="general"/> </Route>
//            <Route path="/health"><News setProgress={this.setProgress}  pageSize={5} country="in" category="health"/> </Route>
//            <Route path="/science"><News setProgress={this.setProgress}  pageSize={5} country="in" category="science"/> </Route>
//            <Route path="/sports"><News setProgress={this.setProgress}  pageSize={5} country="in" category="sports"/> </Route>
//            <Route path="/technology"><News setProgress={this.setProgress}  pageSize={5} country="in" category="technology"/> </Route>
           
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress}  key='general' pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress}  key='business' pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress}  key='health' pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress}  key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress}  key='sports' pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress}  key='technology' pageSize={12} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}