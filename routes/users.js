import express from "express";
import { v4 as uuidv4 } from "uuid";

const Users = [];

const router = express.Router();

router.post("/", (req, res) => {
    try {
        const newUser = req.body;
        Users.find((user) => {
            if (user.username === newUser.username) {
                throw "User Available";
            }
        });
        Users.push({ ...newUser, id: uuidv4() });
        return res.status(200).json("User Added Successfully");
    } catch (err) {
        return res.status(400).json(err);
    }
});

router.get("/", (req, res) => {
    try {
        const users = Users.map((user) => {
            return {
                id: user.id,
                username: user.username,
                name: user.name,
                college: user.college,
                year_of_graduation: user.year_of_graduation
            };
        });
        if (!users[0]) {
            throw "There are no users!";
        }
        return res.status(200).json(users);
    } catch (err) {
        return res.status(400).json(err);
    }
});

router.get("/:id", (req, res) => {
    try {
        const id = req.params.id;
        const users = Users.map((user) => {
            user.id === id;
            return {
                id: user.id,
                username: user.username,
                name: user.name,
                college: user.college,
                year_of_graduation: user.year_of_graduation
            };
        });
        if (!users) {
            throw "No User Found!";
        }
        return res.status(200).json(users);
    } catch (error) {
        if (error === "No User Found!") {
            return res.status(404).json(error);
        }
        return res.status(400).json(error);
    }
});

router.put("/", (req, res) => {
    try {
        const updateuser = req.body;
        const newUser = Users.map((user) => {
            if (
                user.username === updateuser.username &&
                user.password === updateuser.password
            ) {
                return (user = updateuser);
            } else if (
                user.username === updateuser.username ||
                user.password === updateuser.password
            ) {
                throw "User details Incorrect!";
            }
            throw "User Not Registered!!";
        });
        if (!newUser[0]) {
            throw "There are no users!";
        }
        return res.status(200).json({
            message: "User updated Successfully",
            details: newUser
        });
    } catch (err) {
        if (err === "User details Incorrect!") {
            return res.status(401).json(err);
        }
        return res.status(400).json(err);
    }
});

export default router;
