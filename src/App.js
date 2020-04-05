import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import CharacterDetail from './components/Characters/CharacterDetail';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#23b0c6',
            main: '#23b0c6',
            dark: '#23b0c6'
        }
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <NavBar/>
                    <Container maxWidth="lg" style={{padding: '30px 0'}}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/characters/:id" component={CharacterDetail}/>
                        <Route exact path="/characters" component={Characters}/>
                    </Container>
                </Router>
        </ThemeProvider>
    );
};

export default App;