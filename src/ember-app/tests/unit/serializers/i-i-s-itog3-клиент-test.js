import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itog3-клиент', 'Unit | Serializer | i-i-s-itog3-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-itog3-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-itog3-статус',
    'transform:i-i-s-itog3-тип-договора',
    'transform:i-i-s-itog3-услуга',

    'model:i-i-s-itog3-дир-отд-по-раб-с-кл',
    'model:i-i-s-itog3-договор',
    'model:i-i-s-itog3-затр-время',
    'model:i-i-s-itog3-клиент',
    'model:i-i-s-itog3-оказ-услуг',
    'model:i-i-s-itog3-перечень-услуг',
    'model:i-i-s-itog3-расчет-ост-врем',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
