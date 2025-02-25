exports.homePage = (req,res) => {
    res.send(`
        <form action="/" method="POST">
        Client Name: <input type="text" name="othercamp">
        <button>Invite</button>
        </form>
        `)
}