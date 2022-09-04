const express = require('express');
const router = express.Router();

const ProvinceController = require('../Controller/province.controller');
const RegencyController = require('../Controller/regency.controller');
const DistrictController = require('../Controller/district.controller');
const PeopleController = require('../Controller/people.controller');
const UserController = require('../Controller/user.controller');
const AuthenticationController = require('../Controller/auth.controller');

const ProvinceRoute = require('./province.routes');
const RegencyRoute = require('./regency.routes');
const DistrictRoute = require('./district.routes');
const PeopleRoute = require('./people.routes');
const UserRoute = require('./user.routes');
const AuthRouter = require('./auth.routes');

const AuthMiddleware = require('../middleware/auth.middleware');

router.use('/province', ProvinceRoute(ProvinceController));
router.use('/district', DistrictRoute(DistrictController));
router.use('/regency', RegencyRoute(RegencyController));
router.use('/people/search', PeopleController().searchDataPeople)
router.use('/people', PeopleRoute(PeopleController));
router.use('/init', AuthRouter(AuthenticationController));
router.use('/register', UserRoute(UserController));

module.exports = router;