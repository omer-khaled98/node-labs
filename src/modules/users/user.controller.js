import userModel from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import senEmails from "../../util/sendEmail.js";
import jwt  from "jsonwebtoken";
const signUp = async (req, res) => {
  await userModel.insertMany(req.body);
  senEmails(req.body.email);
  res.json({ messege: "added" });
};
const signIn = async (req, res) => {
  let foundedUser = await userModel.findOne({ email: req.body.email });
  if (
    !foundedUser ||
    !bcrypt.compareSync(req.body.password, foundedUser.password)
  )
    return res.status(404).json({ messege: "email or password is wrong" });



    let token = jwt.sign({id:foundedUser._id , role: foundedUser.role} ,"Bl7");
    console.log(token)

  res.status(200).json({ messege: "wellllcome" ,token});

  // if (
  //   foundedUser &&
  //   bcrypt.compareSync(req.body.password, foundedUser.password)
  // ) {
  //   res.status(200).json({ messege: "wellllcome" });
  // } else {
  //   res.status(404).json({ messege: "email or password is wrong" });
  // }
  // console.log(foundedUser);
  //   await userModel.insertMany(req.body);
};

export { signUp, signIn };
