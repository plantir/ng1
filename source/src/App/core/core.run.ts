export const moduleRun = (
  ngMeta: any,
  $transitions: any,
  $document: any,
  $state: ng.ui.IStateService
) => {
  'ngInject';
  ngMeta.init();
  $transitions.onSuccess({}, (trans: any) => {
    if (
      $state.current.name.includes('static') ||
      $state.current.name.includes('my-cashineh') ||
      $state.current.name === 'home'
    ) {
      $document.scrollTop(0);
    }
  });
  $transitions.onBefore({ to: 'merchants-detail' }, function(transition: any) {
    let id = transition.targetState().params().id;
    let name = transition.targetState().params().name;
    if (name.match(' ')) {
      const regex = new RegExp(' ', 'g');
      const stateService = transition.router.stateService;
      name = name.replace(regex, '-');
      return stateService.target('merchants-detail', { id, name });
    }
  });

  $document.on('scroll', function() {
    if ($document.scrollTop() > 150) {
      $('.menu-bar').addClass('fixed');
    } else {
      $('.menu-bar').removeClass('fixed');
    }
  });
};
