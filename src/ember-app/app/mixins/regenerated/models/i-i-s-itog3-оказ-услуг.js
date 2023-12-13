import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  предостУслуга: DS.attr('i-i-s-itog3-услуга'),
  договор: DS.belongsTo('i-i-s-itog3-договор', { inverse: null, async: false }),
  переченьУслуг: DS.belongsTo('i-i-s-itog3-перечень-услуг', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-itog3-расчет-ост-врем', { inverse: 'оказУсл', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-itog3-оказ-услуг.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-itog3-оказ-услуг.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  предостУслуга: {
    descriptionKey: 'models.i-i-s-itog3-оказ-услуг.validations.предостУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-itog3-оказ-услуг.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьУслуг: {
    descriptionKey: 'models.i-i-s-itog3-оказ-услуг.validations.переченьУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-itog3-оказ-услуг.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказУслугE', 'i-i-s-itog3-оказ-услуг', {
    дата: attr('Дата', { index: 0 }),
    времяКонсульт: attr('Время консульт', { index: 1 }),
    предостУслуга: attr('Предост услуга', { index: 2 }),
    переченьУслуг: belongsTo('i-i-s-itog3-перечень-услуг', 'Перечень услуг', {
      затрВремя: belongsTo('i-i-s-itog3-затр-время', '', {
        наименование: attr('', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });
};
