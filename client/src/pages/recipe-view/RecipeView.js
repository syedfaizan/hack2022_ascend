import { Grid, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useParams } from 'react-router-dom';
const request = require('../../utils/axios');

export default function RecipeView() {
  const [recipe, setRecipe] = useState({});
  const [comment, setComment] = useState('');
  const { id } = useParams();
  useEffect(() => {
    request
      .get(`/recipe/${id}`, {
        params: {
          populate: [{ path: 'comments' }]
        }
      })
      .then((res) => {
        setRecipe(res);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    request
      .post(`/comment/`, {
        message: comment.target.value,
        recipe: recipe._id,
        user: localStorage.getItem('userId'),
        email: localStorage.getItem('email')
      })
      .then((comment) => {
        setRecipe(comment);

        // update the id in recipe
        request
          .put(`/recipe/${recipe._id}`, {
            $push: { comments: comment._id }
          })
          .then((ok) => {
            // setComment('');
          });
      });
  };

  return (
    <Grid container>
      <iframe
        title='Recipe view'
        width={'100%'}
        height={'500px'}
        src={recipe.url}
      ></iframe>

      <Grid container className='comments'>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <h1>Comments</h1>
          <Grid container style={{ borderBottom: '1px solid black' }}>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6}>
                  <div>{recipe.likes} likes</div>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Button variant=''>
                  <ThumbUpIcon></ThumbUpIcon>
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <TextField label='Comment' onChange={setComment}></TextField>
              <Button variant='contained' onClick={handleSubmit}>
                COMMENT
              </Button>
            </Grid>
          </Grid>
          {recipe.comments &&
            recipe.comments.map((comment, index) => {
              return (
                <Grid
                  container
                  key={index + 1}
                  style={{ borderBottom: '1px solid black' }}
                >
                  <Grid item xs={6}>
                    <p>{comment.message}</p>
                  </Grid>
                  <Grid item xs={6}>
                    <h5>- {comment.email}</h5>
                  </Grid>
                </Grid>
              );
            })}
          <Grid item xs={12}>
            <Button style={{ marginTop: '2%' }} fullWidth variant='contained'>
              Approve{' '}
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={3} />
      </Grid>
    </Grid>
  );
}
