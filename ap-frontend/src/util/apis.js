import { useAuth0 } from "@auth0/auth0-react";

async function Check() {
   
    const { user } = useAuth0();
    await fetch('/addUser', {
        
        method: 'POST',
        body: JSON.stringify({ name: user.name, age: user.age, email: user.email }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

async function getGender(gender) {
    const records = await fetch('/search/gender/' + gender).then((t) => t.json())
    console.log(records);
    return records;
    // const records = await fetch('/getUsers').then((t) => t.json())
}

async function getCategory(gender, category) {
    const records = await fetch('/search/' + gender + '/' + category).then((t) => t.json())
    // console.log(records);
    return records;
}

async function getSearch(term) {
    const records = fetch('/search/byterm/' + term ).then((t) => t.json())
    console.log(records);
    return records;

}
// app.get('/search/:term', async (req, res) => {
//     const term = req.params.term;
  
//     Product.find(
//       {$or: [{name: {$regex: term, $options: '<i>'}} , {category : {$regex: term, $options: '<i>'}}]}
//       );
  
//   });
  

  export {Check, getGender, getCategory, getSearch};
  