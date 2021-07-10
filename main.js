'use strict';

const fetch = require('node-fetch');
const fs = require('fs');


async function getRequest(url){
    const res = await fetch(url+'/?__a=1');
    const data = await res.json()
    return data.graphql.user.is_verified;
}

(async() => {

    

        console.dir(await getRequest(`https://www.instagram.com/cristiano`))
        

})()
