import './Recipe.css';
import { Formik } from 'formik';
import { Grid, TextField, Button } from '@mui/material';
const request = require('../../utils/axios');
const _ = require('lodash');

function App() {
  return (
    <div className='App'>
      <header className=''>
        <Grid container>
          <Grid item xs={12}>
            <h1>Submit a Recipe!</h1>
          </Grid>
          <Formik
            initialValues={{
              headline: '',
              dek: '',
              siteImage: '',
              description: '',
              ingredients: '',
              instructions: '',
              note: '',
              url: '',
              nutritionalInfo: ''
            }}
            // validate={(values) => {
            //   const errors = {};

            //   return errors;
            // }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              let recipe = _.pick(values, [
                'headline',
                'dek',
                'siteImage',
                'description',
                'ingredients',
                'instructions',
                'note',
                'url',
                'nutritionalInfo'
              ]);
              recipe.author = localStorage.getItem('userId');
              if (
                recipe.headline &&
                recipe.dek &&
                recipe.siteImage &&
                recipe.description &&
                recipe.ingredients &&
                recipe.instructions
              ) {
                return request.post('/recipe', recipe).then(() => {
                  resetForm();
                  alert('Recipe Submitted!');
                });
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              handleReset
              /* and other goodies */
            }) => (
              <>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        name='headline'
                        label='Head Line'
                        margin='dense'
                        fullWidth
                        error={errors.headline && touched.headline}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.headline && touched.headline && errors.headline
                        }
                        value={values.headline}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        name='dek'
                        label='Dek'
                        margin='dense'
                        fullWidth
                        error={errors.dek && touched.dek}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.dek && touched.dek && errors.dek}
                        value={values.dek}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        name='siteImage'
                        label='Site Image'
                        margin='dense'
                        fullWidth
                        error={errors.siteImage && touched.siteImage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.siteImage &&
                          touched.siteImage &&
                          errors.siteImage
                        }
                        value={values.siteImage}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        multiline
                        rows={4}
                        name='description'
                        label='Description'
                        margin='dense'
                        fullWidth
                        error={errors.description && touched.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.description &&
                          touched.description &&
                          errors.description
                        }
                        value={values.description}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        multiline
                        rows={4}
                        name='ingredients'
                        label='Ingredients'
                        margin='dense'
                        fullWidth
                        error={errors.ingredients && touched.ingredients}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.ingredients &&
                          touched.ingredients &&
                          errors.ingredients
                        }
                        value={values.ingredients}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        multiline
                        rows={4}
                        name='instructions'
                        label='Instructions'
                        margin='dense'
                        fullWidth
                        error={errors.instructions && touched.instructions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.instructions &&
                          touched.instructions &&
                          errors.instructions
                        }
                        value={values.instructions}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        multiline
                        rows={4}
                        name='note'
                        label='Note'
                        margin='dense'
                        fullWidth
                        error={errors.note && touched.note}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.note && touched.note && errors.note}
                        value={values.note}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        multiline
                        rows={4}
                        name='nutritionalInfo'
                        label='Nutritional Info'
                        margin='dense'
                        fullWidth
                        error={
                          errors.nutritionalInfo && touched.nutritionalInfo
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.nutritionalInfo &&
                          touched.nutritionalInfo &&
                          errors.nutritionalInfo
                        }
                        value={values.nutritionalInfo}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='text'
                        multiline
                        rows={4}
                        name='url'
                        label='url'
                        margin='dense'
                        fullWidth
                        error={errors.url && touched.url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.url && touched.url && errors.url}
                        value={values.url}
                      />
                    </Grid>
                    <Button
                      fullWidth
                      type='submit'
                      margin='dense'
                      variant='contained'
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </form>

                  <Grid item xs={3}></Grid>
                </Grid>
              </>
            )}
          </Formik>
        </Grid>
      </header>
    </div>
  );
}

export default App;
