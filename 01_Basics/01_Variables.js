const accountId = 133553
let accountEmail = "shravan@gmail.com"
var accountPassword = "12345"
accountCity = "Shrirampur"
let accountState;

// accountId = 2  // not allowed
accountEmail = "st@st.com"
accountPassword = "2222"
accountCity = "Pune"

console.log(accountId);

/*
    Prefer not to use var
    Because of issue in bloack scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])