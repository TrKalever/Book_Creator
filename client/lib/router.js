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
});