Template.joinus.events({
    "submit .join-form-username": function(event){
        var username = event.target.username.value;

        Session.set('username', username);

        Router.go('username');

        return false;


    },
    "submit .join-form-email": function(event){
        var email = event.target.email.value;

        Session.set('email', email);


        Router.go('email');

        return false;


    }
});

Template.username.events({
    "submit .join-form-email": function(event){
        var email = event.target.email.value;

        Session.set('email', email);


        Router.go('email');

        return false;


    }

});




