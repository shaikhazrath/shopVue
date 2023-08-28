import Auth from "../models/authModel.js"
import bcrypt from 'bcrypt'



export const Register = async (req, res) => {
    try {
        const { email, username, password } = req.body
      const user = await Auth.findOne({ username });

      if (user) {
        return res.status(404).json("username already taken");
      } 
      
        const newUser = new Auth({
            email,
            password,
            username
        })
        await newUser.save()
        const token = newUser.generateToken()
        res.status(201).json({
            user: newUser,
            token,
            message: 'user registerd successfully'
        })
    } catch (error) {
     

        res.status(500).send('An error occurred during registration'+error);

      
    } 
}


export const Login = async (req, res) => {
  try {
      const { emailOrUsername, password } = req.body;
      const user = await Auth.findOne({
          $or: [{ email: emailOrUsername }, { username: emailOrUsername }]
      });

      if (!user) {
          return res.status(404).json("Invalid credentials");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
          return res.status(401).json("Invalid credentials");
      }

      const token = user.generateToken();
      res.status(200).json({
          user,
          token,
          message: "Auth login successful"
      });
  } catch (error) {
      res.status(500).json("Server Error"+error);
  }
};
