exports.addEmployee = {
  type: 'object',
  required: [
    'id',
    'data',
    'parent',
    'org'
  ],
  additionalProperties: false,
  properties: {
    id: {
      type: 'integer'
    },
    parent: {
      type: 'integer'
    },
    data: {
      type: 'object'
    },
    org: {
      type: 'string',
      pattern: '^[0-9]+$'
    }
  }
}

exports.getEmployee = {
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      anyOf: [{
        type: 'integer'
      },
      {
        type: 'string',
        pattern: '^[0-9]+$'
      }
      ]
    },
    parent: {
      type: 'integer'
    },
    data: {
      type: 'object'
    },
    org: {
      type: 'string'
    }
  }
}

exports.updateEmployee = {
  type: 'object',
  additionalProperties: true,
  required: [
    'id',
    'data',
    'parent',
    'org'
  ],
  properties: {
    id: {
      type: 'integer'
    },
    parent: {
      type: 'integer'
    },
    data: {
      type: 'object'
    },
    org: {
      type: 'string'
    }
  }
}
