import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import HomePage from './components/Home/HomePage';
import About from './components/About/AboutPage';
import Login from './components/Login/LoginPage';
import Register from './components/Register/RegisterPage';
import Logout from './components/Logout/LogoutPage';
import CreatePostPage from './components/Posts/Create post/CreatePostPage';
import AllPostsPage from './components/Posts/AllPostsPage';
import Profile from './components/Profile/ProfilePage';
import Edit from './components/Posts/Edit post/EditPage';
import Details from './components/Posts/DetailsPage';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={About}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="createPost" component={CreatePostPage}/>
            <Route path="allPosts" component={AllPostsPage}/>
            <Route path="edit/:postId" component={Edit}/>
            <Route path="details/:postId" component={Details}/>
            <Route path="logout" component={Logout}/>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
