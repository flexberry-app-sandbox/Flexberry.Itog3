import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItog3ДирОтдПоРабСКлLForm from './forms/i-i-s-itog3-дир-отд-по-раб-с-кл-l';
import IISItog3ДоговорLForm from './forms/i-i-s-itog3-договор-l';
import IISItog3ЗатрВремяLForm from './forms/i-i-s-itog3-затр-время-l';
import IISItog3КлиентLForm from './forms/i-i-s-itog3-клиент-l';
import IISItog3ПереченьУслугLForm from './forms/i-i-s-itog3-перечень-услуг-l';
import IISItog3РасчетОстВремLForm from './forms/i-i-s-itog3-расчет-ост-врем-l';
import IISItog3ДирОтдПоРабСКлEForm from './forms/i-i-s-itog3-дир-отд-по-раб-с-кл-e';
import IISItog3ДоговорEForm from './forms/i-i-s-itog3-договор-e';
import IISItog3ЗатрВремяEForm from './forms/i-i-s-itog3-затр-время-e';
import IISItog3КлиентEForm from './forms/i-i-s-itog3-клиент-e';
import IISItog3ПереченьУслугEForm from './forms/i-i-s-itog3-перечень-услуг-e';
import IISItog3РасчетОстВремEForm from './forms/i-i-s-itog3-расчет-ост-врем-e';
import IISItog3ДирОтдПоРабСКлModel from './models/i-i-s-itog3-дир-отд-по-раб-с-кл';
import IISItog3ДоговорModel from './models/i-i-s-itog3-договор';
import IISItog3ЗатрВремяModel from './models/i-i-s-itog3-затр-время';
import IISItog3КлиентModel from './models/i-i-s-itog3-клиент';
import IISItog3ОказУслугModel from './models/i-i-s-itog3-оказ-услуг';
import IISItog3ПереченьУслугModel from './models/i-i-s-itog3-перечень-услуг';
import IISItog3РасчетОстВремModel from './models/i-i-s-itog3-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog3-дир-отд-по-раб-с-кл': IISItog3ДирОтдПоРабСКлModel,
    'i-i-s-itog3-договор': IISItog3ДоговорModel,
    'i-i-s-itog3-затр-время': IISItog3ЗатрВремяModel,
    'i-i-s-itog3-клиент': IISItog3КлиентModel,
    'i-i-s-itog3-оказ-услуг': IISItog3ОказУслугModel,
    'i-i-s-itog3-перечень-услуг': IISItog3ПереченьУслугModel,
    'i-i-s-itog3-расчет-ост-врем': IISItog3РасчетОстВремModel
  },

  'application-name': 'Itog3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Itog3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog3',
          title: 'Itog3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        itog3: {
          caption: 'Itog3',
          title: 'Itog3',
          'i-i-s-itog3-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-itog3-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-itog3-перечень-услуг-l': {
            caption: 'Перечень услуг',
            title: ''
          },
          'i-i-s-itog3-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-itog3-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-itog3-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-itog3-дир-отд-по-раб-с-кл-l': IISItog3ДирОтдПоРабСКлLForm,
    'i-i-s-itog3-договор-l': IISItog3ДоговорLForm,
    'i-i-s-itog3-затр-время-l': IISItog3ЗатрВремяLForm,
    'i-i-s-itog3-клиент-l': IISItog3КлиентLForm,
    'i-i-s-itog3-перечень-услуг-l': IISItog3ПереченьУслугLForm,
    'i-i-s-itog3-расчет-ост-врем-l': IISItog3РасчетОстВремLForm,
    'i-i-s-itog3-дир-отд-по-раб-с-кл-e': IISItog3ДирОтдПоРабСКлEForm,
    'i-i-s-itog3-договор-e': IISItog3ДоговорEForm,
    'i-i-s-itog3-затр-время-e': IISItog3ЗатрВремяEForm,
    'i-i-s-itog3-клиент-e': IISItog3КлиентEForm,
    'i-i-s-itog3-перечень-услуг-e': IISItog3ПереченьУслугEForm,
    'i-i-s-itog3-расчет-ост-врем-e': IISItog3РасчетОстВремEForm
  },

});

export default translations;
