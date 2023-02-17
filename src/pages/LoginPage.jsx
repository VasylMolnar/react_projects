import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PasswordIcon from '@mui/icons-material/Password';
import { ValidationTextField } from '../utilities/ValidationTextField';
import useLoginUser from '../hooks/useLoginUser';
import { userLoginSchema } from '../utilities/validationSchema';

function LoginPage() {
  const navigate = useNavigate();
  const { onSubmitForm } = useLoginUser();

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
        Login Form
      </Typography>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userLoginSchema}
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
                  variant="outlined"
                  defaultValue="Success"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  style={{ width: '500px' }}
                />
                <ErrorMessage name="email" component="div" />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 2 }} />

                <ValidationTextField
                  label="Your password?"
                  variant="outlined"
                  defaultValue="Success"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  style={{ width: '500px' }}
                />
                <ErrorMessage name="password" component="div" />
              </Box>
            </Box>

            <div style={{ margin: '100px 0px 30px 60px' }}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                size="large"
                style={{ marginRight: '10px' }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="warning"
                type="submit"
                size="large"
                onClick={() => {
                  navigate('/register');
                }}
              >
                Register
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
/*  {props => {
    console.log('', props);
    <></>;
}} */
