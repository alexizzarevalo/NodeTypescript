import {Request, Response} from "express";

class UserController {
    public newUser(req: Request, res: Response) {
        res.send("Hello world");
    }
}
export default new UserController();
