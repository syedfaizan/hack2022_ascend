// import './Login.css';
import { Formik } from 'formik';
import { Grid, TextField, Button } from '@mui/material';
const request = require('../../utils/axios');

function App() {
  return (
    <div className='background'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <header className='header'>
          <Grid container className='background-div'>
            <Grid item xs={12}>
              <h1>Welcome to Ascend!</h1>
              <h3>Login to continue</h3>
            </Grid>
            <Formik
              initialValues={{
                email: 'syed_faizan@condenast.com',
                password: 'password'
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                let login = {
                  email: values.email,
                  password: values.password
                };
                request
                  .get('/user', {
                    params: {
                      query: {
                        $and: [
                          { email: login.email },
                          { password: login.password }
                        ]
                      }
                    }
                  })
                  .then((user) => {
                    setSubmitting(false);
                    resetForm();
                    if (user.length > 0) {
                      window.location.href = '/recipe/create';
                      user = user[0];
                      delete user.password;
                      localStorage.setItem('userId', user._id);
                      localStorage.setItem('email', user.email);
                    }
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <>
                  <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <form onSubmit={handleSubmit}>
                        <Grid item xs={12}>
                          <TextField
                            type='email'
                            name='email'
                            label='Email'
                            margin='dense'
                            fullWidth
                            error={errors.email && touched.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              errors.email && touched.email && errors.email
                            }
                            value={values.email}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            type='password'
                            name='password'
                            label='Password'
                            margin='dense'
                            fullWidth
                            error={errors.password && touched.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              errors.password &&
                              touched.password &&
                              errors.password
                            }
                            value={values.password}
                          />
                        </Grid>
                        <Button
                          type='submit'
                          margin='dense'
                          variant='contained'
                          disabled={isSubmitting}
                        >
                          Submit
                        </Button>
                      </form>

                      <Grid item xs={4}></Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            </Formik>
          </Grid>
        </header>
      </div>
    </div>
  );
}

export default App;
