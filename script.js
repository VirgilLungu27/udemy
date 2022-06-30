const APIURL = 'https://api.github.com/users/';

getUser('VirgilLungu27');

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}