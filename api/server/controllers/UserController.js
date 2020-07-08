require('dotenv').config();

import UserService from '../services/UserService';
import Util from '../utils/Utils';
import jwt from 'jsonwebtoken';

const util = new Util();

class UserController {

    static async getAllUsers(req, res) {
        try {
            const allUsers = await UserService.getAllUsers();

            if (allUsers.length > 0) {
                util.setSuccess(200, 'users retrieved', allUsers);
            } else {
                util.setSuccess(200, 'no user found');
            }

            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async addUser(req, res) {

        if (!req.body.name || !req.body.email) {
            util.setError(400, 'please provide complete details');
            return util.send(res);
        }

        const newUser = req.body;

        try {
            const createdUser = await UserService.addUser(newUser);
            util.setSuccess(201, 'user added', createdUser);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async updatedUser(req, res) {
        const alteredUser = req.body;
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please input a valid numeric value');
            return util.send(res);
        }

        try {
            const updateUser = await UserService.updateUser(id, alteredUser);

            if (!updateUser) {
                util.setError(404, `cannot find user with the id: ${id}`);
            } else {
                util.setSuccess(200, 'user updated', updateUser);
            }

            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async getUser(req, res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please input a valid numeric value');
            return util.send(res);
        }

        try {
            const theUser = await UserService.getUser(id);

            if (!theUser) {
                util.setError(404, `cannot find user with the id ${id}`);
            } else {
                util.setSuccess(200, 'found user', theUser);
            }

            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please provide a numeric value');
            return util.send(res);
        }

        try {
            const userToDelete = await UserService.deleteUser(id);

            if (userToDelete) {
                util.setSuccess(200, 'user deleted');
            } else {
                util.setError(404, `user with the id ${id} cannot be found`);
            }

            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async signInUser(req, res) {
        console.log(process.env.SIGN_IN_SECRET);

        if (!req.body.name || !req.body.email || !req.body.secret) {
            util.setError(400, 'please provide complete details');
            return util.send(res);
        }

        if (process.env.SIGN_IN_SECRET != req.body.secret) {
            util.setError(400, 'please provide a valid secret key')
            return util.send(res);
        }

        var user = await UserService.getUserByEmail(req.body.email);

        if (!user) {
            try {
                user = await UserService.addUser({email: req.body.email, name: req.body.name});
            } catch (error) {
                util.setError(400, error.message);
                return util.send(res);
            }
        }

        jwt.sign({ user }, process.env.JWT_SECRET, (error, token) => {

            if (error) {
                util.setError(403, error);
            } else {
                util.setSuccess(200, 'user authenticated', token);
            }

            return util.send(res);
        })

    }

    static async verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
  
        if (typeof bearerHeader !== 'undefined') {
            const token = bearerHeader.split(' ')[1];

            jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
                if (err) {
                    res.sendStatus(403);
                } else {
                    console.log(authData);
                }
            });

            next();
        } else {
            res.sendStatus(403);
        }
    }
    
}

export default UserController;
