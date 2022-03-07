export default (user) => {
    return {
        fullname: user.name + ' ' + user.surname,
        image: user.image
    }
}