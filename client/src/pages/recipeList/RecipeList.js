import './RecipeList.css';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia
} from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
const request = require('../../utils/axios');

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    request.get('/recipe', { params: { sort: { likes: -1 } } }).then((res) => {
      setRecipes(res);
    });
  }, []);
  return (
    <Grid container>
      <Grid container className='cardWrapper' spacing={2}>
        {recipes.map((recipe) => {
          let likes = (recipe.likes && recipe.likes.length) || 0;
          return (
            <Grid item sm={12} md={6} lg={3}>
              <Card className='cardItem' margin='dense'>
                <CardMedia
                  component='img'
                  height='140'
                  image={recipe.siteImage}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {recipe.headline}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {recipe.dek}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>{recipe.likes} Likes</Button>
                  <Button size='small'>
                    <Link to={`/recipe/${recipe._id}`}>Read More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
