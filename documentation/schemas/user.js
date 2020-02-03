module.exports = {
  userId: {
    type: 'integer',
    example: 7
  },
  username: {
    type: 'string',
    example: 'tom99'
  },
  userEmail: {
    type: 'string',
    example: 'tom.engels@wolox.com.ar'
  },
  userFirstName: {
    type: 'string',
    example: 'Tom'
  },
  userLastName: {
    type: 'string',
    example: 'Engels'
  },
  password: {
    type: 'string',
    example: 'Asdf1234'
  },
  User: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/userId'
      },
      username: {
        $ref: '#/components/schemas/username'
      },
      email: {
        $ref: '#/components/schemas/userEmail'
      },
      firstName: {
        $ref: '#/components/schemas/userFirstName'
      },
      lastName: {
        $ref: '#/components/schemas/userLastName'
      },
      password: {
        $ref: '#/components/schemas/password'
      }
    }
  },
  Users: {
    type: 'object',
    properties: {
      users: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/User'
        }
      }
    }
  }
};
