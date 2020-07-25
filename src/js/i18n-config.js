var DEFAULT_LANG = 'en';

jQuery(function($) {
  $.i18n().load({
    'en': 'src/js/jquery-i18n/languages/en.json',
    'es': 'src/js/jquery-i18n/languages/es.json'
  }).done(function() {
    setLocale(defaultLocale());
    translate();
    localeSwitcher();
  });
});

let defaultLocale = () => {
  let userLocale = navigator.language;
  let definedLocales = [DEFAULT_LANG, 'es'];
  let isPresent = definedLocales.includes(userLocale);
  if(isPresent) {
    return userLocale
  }
  else {
    return DEFAULT_LANG;
  }
}

let setLocale = (userLocale) => {
  $.i18n().locale = userLocale;
}

let translate = () => {
  $('#welcome').text($.i18n('welcome'));
}

let localeSwitcher = () => {
  $('.locale-switcher').on('click', 'a', function(e) {
    e.preventDefault();
    setLocale($(this).data('locale'));
    translate();
  });
}