
import React from 'react';
import request from 'superagent';

import dispatcher from './dispatchers/appDispatcher';


console.log( 'its alive' );

var btn = document.querySelector( '#get' );
btn.addEventListener( 'click', event => {
    request
        .get( '/api/categories' )
        .end( ( err, res ) => {
            if ( err ) {
                return console.error( err );
            }

            if ( !res.ok ) {
                return console.log( 'Something funky going on with result. ', res );
            }

            console.log( JSON.stringify( res.body ) );
        });
});
