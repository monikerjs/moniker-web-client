
import React from 'react';
import request from 'superagent';

import dispatcher from './dispatchers/appDispatcher';


console.log( 'its alive' );

var currentCategory = '';

var getCategories = function() {
    return new Promise( ( resolve, reject ) => {
        request
            .get( '/api/categories' )
            .end( ( err, res ) => {
                if ( err ) {
                    console.error( err );
                    reject( err );
                }

                if ( !res.ok ) {
                    console.log( 'Something funky going on with result. ', res );
                    reject( err );
                }

                console.log( JSON.stringify( res.body ) );
                resolve( JSON.stringify( res.body ) );
            });
    });
};

var createCategory = function( cat ) {
    currentCategory = cat;
    return new Promise( ( resolve, reject ) => {
        getCategories()
            .then( res => {
                if ( res.includes( cat ) ) {
                    console.log( 'category already created' );
                    return resolve( cat );
                }

                console.log( 'new category time' );
                request
                    .post( '/api/categories' )
                    .send({
                        category: cat
                    })
                    .set( 'Accept', 'application/json' )
                    .end( ( err, res ) => {
                        if ( err ) {
                            console.error( err );
                            reject( err );
                        }

                        if ( !res.ok ) {
                            console.log( 'Something funky going on with result. ', res );
                            reject( err );
                        }

                        console.log( 'New category created' );
                        console.log( JSON.stringify( res.body ) );
                        resolve( cat);
                    });

            })
            .catch( console.log );

    });
};

var createName = function( name ) {
    return new Promise( ( resolve, reject ) => {
        var route = '/api/names/' + currentCategory;
        request.post( route )
            .send({
                name: name,
                commonality: 'common'
            })
            .set( 'Accept', 'application/json' )
            .end( ( err, res ) => {
                if ( err ) {
                    console.log( 'get names erroring' );
                    console.error( err );
                    reject( err );
                }

                if ( !res.ok ) {
                    console.log( 'Something funky going on with result. ', res );
                    reject( err );
                }

                console.log( 'Name created' );
                resolve( res.body );
            });

    });
};

var getNames = function() {
    return new Promise( ( resolve, reject ) => {
        var route = '/api/names/' + currentCategory + '/common';
        console.log( route );
        request
            .get( route )
            .end( ( err, res ) => {
                if ( err ) {
                    console.log( 'get names erroring' );
                    console.error( err );
                    reject( err );
                }

                if ( !res.ok ) {
                    console.log( 'Something funky going on with result. ', res );
                    reject( err );
                }

                console.log( res.body );
                resolve( res.body.message );
            });
    });
};

var updateNames = function() {
    var catTitle = document.querySelector( '#category-title' );
    catTitle.innerHTML = currentCategory;

    var ul = document.querySelector( 'ul' );
    ul.innerHTML = '';

    function createElement( content ) {
        var div = document.createElement( 'li' );
        div.classList.add( 'name' );
        div.innerHTML = content;
        return div;
    }

    getNames()
        .then( res => {
            console.log( 'hello', res );
            if ( !res.length ) {
                return;
            }

            res.forEach( name => {
                console.log( 'appending children', name );
                ul.appendChild( createElement( name ) );
            });
        })
        .catch( console.log );
};


var btn = document.querySelector( '#get' );
btn.addEventListener( 'click', event => {
    getCategories();
});

var addCat = document.querySelector( 'input[ name="addCategory" ]' );
addCat.addEventListener( 'click', event => {
    var name = document.querySelector( 'input[ name="category" ]' ).value;

    if ( name.length <= 0 ) {
        console.log( 'enter a category name' )
        return;
    }

    createCategory( name )
        .then( res => {
            console.log( 'updating names' );
            updateNames();
        })
        .catch( console.log );
});

var addName = document.querySelector( 'input[ name="addName" ]' );
addName.addEventListener( 'click', event => {
    var name = document.querySelector( '#name-text' ).value;
    if ( name.length <= 0 ) {
        console.log( 'enter a name' );
        return;
    }

    console.log( 'creating', name );
    createName( name )
        .then( updateNames )
        .catch( console.log );
});
