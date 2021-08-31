import logo from './logo.svg';
import './App.css';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createTheme,
  Typography,
  Container,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';
import {green,orange} from '@material-ui/core/colors';
import { Save as SaveIcon, Delete as DeleteIcon, Menu as MenuIcon } from '@material-ui/icons/'
import { useState } from 'react';
import 'fontsource-roboto'



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#FE6B8B,#FF8E53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    padding: '5px 30px',
    color: "white"
  }
})

const theme = createTheme({
  typography:{
    h2:{
      fontSize: 36,
      marginBottom:10
    }
  },
  palette:{
    primary:{
      main: orange[500],
    },
    secondary:{
      main:green[200]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return (
    <Button className={classes.root}>Test Styled Button</Button>
  )
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      control={
        <div>
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
        </div>
      }
      label="Testing checkbox"
    />

  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App"> ̰
          <header className="App-header" >
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to Material UI
            </Typography>
            <Typography variant="subtitle1" component="div">
              Learn to use Material Ui
            </Typography>
            <ButtonStyled />
            <TextField
              variant="filled"
              label="Text"
              type="email"
              color="secondary"
              placeholder="email@example.com"
              value=""
            />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{width:'100%' , height:75}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{width:'100%' , height:75}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{width:'100%' , height:75}}/>
              </Grid>
            </Grid>
            <CheckBoxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button
                startIcon={<SaveIcon />}>
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}>
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
