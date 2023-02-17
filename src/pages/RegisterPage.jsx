import { Formik, Form, ErrorMessage } from 'formik';
import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PasswordIcon from '@mui/icons-material/Password';
import { ValidationTextField } from '../utilities/ValidationTextField';

function RegisterPage() {
  return (
    <div
      style={{
        maxWidth: '600px',
        border: '1px solid black',
        borderRadius: '5px',
        margin: '30px auto',
        padding: '30px',
      }}
    >
      <Typography variant="h3" component="h2">
        Register Form
      </Typography>

      <Formik
        initialValues={{ name: 'jared' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
            <Box sx={{ '& > :not(style)': { m: 3 } }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <LocalPostOfficeIcon
                  sx={{ color: 'action.active', mr: 1, my: 2 }}
                />

                <ValidationTextField
                  label="Your e-mail adress?"
                  required
                  variant="outlined"
                  defaultValue="Success"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  style={{ width: '500px' }}
                />
                <ErrorMessage name="email" component="div" />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 2 }} />

                <ValidationTextField
                  label="Your password?"
                  required
                  variant="outlined"
                  defaultValue="Success"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  style={{ width: '500px' }}
                />
                <ErrorMessage name="password" component="div" />
              </Box>
            </Box>
            <Button
              variant="contained"
              color="success"
              type="submit"
              size="large"
              style={{ marginTop: '30px' }}
            >
              {isSubmitting ? '...' : 'Login'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;
