function Salutation(fname, lname) {
    var firstName = fname
    var lastName = lname
    return {
        greeting: function() {
            return 'Greetings and salutations ' + firstName + ' ' + lastName
        },
        fullName: function() {
            return firstName + ' ' + lastName
        }
    }
}
