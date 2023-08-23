import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Context from './store/Context';

import { FirebaseContext } from './store/Context';
import firebase from './firebase/firebaseConfig';

ReactDOM.render(
    
    <FirebaseContext.Provider value={{firebase}}>

        <Context>
            
            <App />

        </Context>

    </FirebaseContext.Provider>

, document.getElementById('root'));
