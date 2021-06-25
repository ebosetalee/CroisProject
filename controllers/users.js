import { v4 as uuidv4 } from "uuid";
const Users = [];

const userControllers = {
    registerUser(username, password, name, college, year_of_graduation) {
        try {
            Users.find((user) => {
                if (user.username === username) {
                    throw "User Available";
                }
            });
            const id = uuidv4();
            Users.push({
                id,
                username,
                password,
                name,
                college,
                year_of_graduation
            });
        } catch (error) {
            return error;
        }
    },
    getUsers() {
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
            return users;
        } catch (error) {
            return error;
        }
    },
    getUser(id) {
        try {
            const users = Users.map((user) => {
                user.id === id;
                return {
                    username: user.username,
                    name: user.name,
                    college: user.college,
                    year_of_graduation: user.year_of_graduation
                };
            });
            return users;
        } catch (error) {
            return error;
        }
    },
    updateUser(username, password, name, college, year_of_graduation) {
        try {
            const newUser = Users.map((user) => {
                if (user.username === username && user.password === password) {
                    return (
                        (user.name = name),
                        (user.college = college),
                        (user.year_of_graduation = year_of_graduation)
                    );
                } else if (
                    user.username === username ||
                    user.password === password
                ) {
                    throw "User details Incorrect!";
                }
                throw "User Not Registered!!";
            });
            return newUser;
        } catch (error) {
            return error;
        }
    }
};

export default userControllers;
