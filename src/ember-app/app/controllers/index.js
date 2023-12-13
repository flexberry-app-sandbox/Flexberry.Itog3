import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.itog3.caption'),
          title: i18n.t('forms.application.sitemap.itog3.title'),
          children: [{
            link: 'i-i-s-itog3-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-расчет-ост-врем-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-itog3-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-дир-отд-по-раб-с-кл-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-itog3-перечень-услуг-l',
            caption: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-перечень-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-перечень-услуг-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-itog3-затр-время-l',
            caption: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-затр-время-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-itog3-договор-l',
            caption: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-договор-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-itog3-клиент-l',
            caption: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.itog3.i-i-s-itog3-клиент-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})