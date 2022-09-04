const http = require('http');
const province = require('../Controller/province');
const regency = require('../Controller/regency.controller');
const district = require('../Controller/district.controller');
const people = require('../Controller/people');

// CREATE END POINT 
const httpServer = http.createServer((req, res) => {
    const urlSplit = req.url.split('/');

    // END POINT FOR PROVINCE
    if(req.url === '/province'){
        if(req.method === 'GET'){
            province.getAll(req, res);
        }
        else if(req.method === 'POST'){
            req.addListener('data', data =>{
                province.add(res, data);
            })
        }
        else if(req.method === 'PUT'){
            req.addListener('data', data =>{
                province.update(res, data);
            })
        }
        else if(req.method === 'DELETE'){
            req.addListener('data', data =>{
                province.cut(res, data);
            })
        }
    }
    // ++GET PROVINCE BY ID
    else if(urlSplit[1] === 'province' && urlSplit[2]){
        province.getById(req, res, urlSplit[2]);
    }

    // END POINT FOR REGENCY
    else if(req.url === '/regency'){
        if(req.method === 'GET'){
                regency.getAll(req, res);
        }
        else if(req.method === 'POST'){
            req.addListener('data', data =>{
                regency.add(res, data);
            })
        }
        else if(req.method === 'PUT'){
            req.addListener('data', data =>{
                regency.update(res, data);
            })
        }
        else if(req.method === 'DELETE'){
            req.addListener('data', data =>{
                regency.cut(res, data);
            })
        }
    }
    // ++GET REGENCY BY ID
    else if(urlSplit[1] === 'regency' && urlSplit[2]){
        regency.getById(req, res, urlSplit[2]);
    }


    // END POINT FOR DISTRICT
    else if(req.url === '/district'){
        if(req.method === 'GET'){
                district.getAll(req, res);
        }
        else if(req.method === 'POST'){
            req.addListener('data', data =>{
                district.add(res, data);
            })
        }
        else if(req.method === 'PUT'){
            req.addListener('data', data =>{
                district.update(res, data);
            })
        }
        else if(req.method === 'DELETE'){
            req.addListener('data', data =>{
                district.cut(res, data);
            })
        }
    }

    // ++GET DISTRICT BY ID
    else if(urlSplit[1] === 'district' && urlSplit[2]){
        district.getById(req, res, urlSplit[2]);
    }


    // END POINT FOR PEOPLE
    else if(req.url === '/people'){
        if(req.method === 'GET'){
                people.getAll(req, res);
        }
        else if(req.method === 'POST'){
            req.addListener('data', data =>{
                people.add(res, data);
            })
        }
        else if(req.method === 'DELETE'){
            req.addListener('data', data =>{
                people.cut(res, data);
            })
        }
    }
    // ++GET PEOPLE BY NIK
    else if(urlSplit[1] === 'people' && urlSplit[2] === 'nik' && urlSplit[3]){
        people.getByNIK(req, res, urlSplit[3]);
        }
    // ++GET PEOPLE BY ID
    else if(urlSplit[1] === 'people' && urlSplit[2]){
        people.getById(req, res, urlSplit[2]);
    }

    

    //
    else{
        res.write('YOU ARE LOST !!!')
    }
});

module.exports = httpServer;