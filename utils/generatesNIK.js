const generateNIK = function(data){
    // THIS IS FOR GENERATES NIK
    let NIK = '';
    // SPLIT DOB
    let arrBirth = data.dob.split('-');
    // CEK GENDER
    if(data.gender.toLowerCase() == 'female'){
        arrBirth[2] = Number(arrBirth[2])
        arrBirth[2] += 40;
    }

    // GET NIK
    NIK += data.province_id += data.regency_id += data.district_id
        += arrBirth[2] += arrBirth[1] += arrBirth[0][2] += arrBirth[0][3]
        += Math.floor(Math.random()*10000);

        return NIK;
}

module.exports = generateNIK;