import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login/Login';
import Recipe from './pages/recipe/Recipe';
import RecipeList from './pages/recipeList/RecipeList';
import RecipeView from './pages/recipe-view/RecipeView';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

export default function BasicExample() {
  return (
    <div className='background-div'>
      <Router>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link className='no-decoration' to='/'>
                Ascend
              </Link>
            </Typography>
            <Button color='inherit'>
              <Link className='no-decoration' to='/recipe/create'>
                Add Recipe
              </Link>
            </Button>
            <Button color='inherit'>
              <Link className='no-decoration' to='/recipe/list'>
                View Submissions
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <div>
          {/* <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/recipe/create'>Create Recipe</Link>
          </li>
          <li>
            <Link to='/recipe/list'>List Recipes</Link>
          </li>
        </ul> */}

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/recipe/create'>
              <Recipe />
            </Route>
            <Route path='/recipe/list'>
              <RecipeList />
            </Route>
            <Route path='/recipe/:id'>
              <RecipeView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <Link to='/login'>Login</Link>
    </div>
  );
}
