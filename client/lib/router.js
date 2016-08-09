Router.map(function(){
   this.route('/',{
       path: '/',
       layout: 'layout',
       template: 'landing'
   });
   this.route('/joinus', {
      path: '/joinus',
      layout: 'layout',
      template: 'joinus'
   });

    this.route('/username', {
        path: '/username',
        layout: 'layout',
        template: 'username',
        data: function(){
            var templateData = {
                username: Session.get('username')
            };
            return templateData;
        }
    });

    this.route('/email', {
        path: '/email',
        layout: 'layout',
        template: 'email',
        data: function(){
            var templateData = {
                username: Session.get('username'),
                email: Session.get('email')
            };
            return templateData;
        }
    });
    this.route('/info', {
        path: '/info',
        layout: 'layout',
        template: 'info',
        data: function(){
            var templateData = {
                username: Session.get('username'),
                email: Session.get('email')
            };
            return templateData;
        }
    });
});