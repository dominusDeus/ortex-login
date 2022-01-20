const fs = require('fs');
const path = require('path');
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' });
//   console.log(process.env.ROOT_URI);
// }
const pathToFile = path.resolve('./pages/api/db.json');

const LoginHandler = (req, res, {users}) => {
  // let usersfetched = getUsers()
  // res.status(200).json(usersfetched);
  // const readStream = fs.createReadStream(pathToFile);
  // readStream.pipe(response);
  // res.status(200).send
}


export async function getServerSideProps() {

  const getUsers = () =>{
  // res.status(200).json({ name: 'John Doe' });
  return JSON.parse(fs.readFileSync(pathToFile));
  }

  let users = getUsers();
  console.log(users);
  return {
    props: {users}
  }
}





export default LoginHandler;