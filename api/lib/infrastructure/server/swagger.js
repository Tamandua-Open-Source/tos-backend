export default {
  swagger: '2.0',

  info: {
    version: '1.0.0',
    title: 'Data API',
    description: 'Tamandua Open Source project',
  },

  tags: [
    {
      name: 'Configuration',
      description: 'Server configuration',
    },
    {
      name: 'User',
      description: 'Management of user',
    },
    {
      name: 'User Preferences',
      description: 'Management of user preferences',
    },
    {
      name: 'Game',
      description: 'Management of user gamification',
    },
    {
      name: 'Group',
      description: 'CRUD',
    },
    {
      name: 'User - Group',
      description: 'Management of groups, composed by users',
    },
    {
      name: 'User - Stretch Movement',
      description: 'Management of user progress on stretch movements',
    },
    {
      name: 'User - Stretch Session',
      description: 'Management of user progress on stretch sessions',
    },
    {
      name: 'User - Stretch Challenge',
      description: 'Management of user progress on stretch challenges',
    },
    {
      name: 'User Recommended Workout',
      description: 'Management of user recommended workout',
    },
    {
      name: 'Body Part',
      description: 'CRUD',
    },
    {
      name: 'Stretch Movement - Body Part',
      description:
        'Management of relationship between stretch movements and body parts',
    },
    {
      name: 'Stretch Movement',
      description: 'CRUD',
    },
    {
      name: 'Stretch Session - Stretch Movement',
      description:
        'Management of relationship between stretch sessions and stretch movements',
    },
    {
      name: 'Stretch Session',
      description: 'CRUD',
    },
    {
      name: 'Stretch Challenge - Stretch Session',
      description:
        'Management of relationship between stretch challenges and stretch sessions',
    },
    {
      name: 'Stretch Challenge',
      description: 'CRUD',
    },
  ],

  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
    //configuration
    '/api/configurations': {
      get: {
        tags: ['Configuration'],
        summary: 'Show all configuration',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Configuration',
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/configurations/wipeServer': {
      post: {
        tags: ['Configuration'],
        summary: 'Wipe server, delete unknown users, register again users',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Data Service Api Key',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //user
    '/api/users': {
      get: {
        tags: ['User'],
        summary: 'Show all users',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                users: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User',
                  },
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/login': {
      post: {
        tags: ['User'],
        summary:
          'Authenticates the user and creates if there is no database record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                user: {
                  type: 'object',
                  $ref: '#/definitions/User',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me': {
      get: {
        tags: ['User'],
        summary: 'Shows the logged in user',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                user: {
                  type: 'object',
                  $ref: '#/definitions/User',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['User'],
        summary: 'Delete the logged in user',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userId: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      put: {
        tags: ['User'],
        summary: 'updates the logged in user',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                email: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                user: {
                  type: 'object',
                  $ref: '#/definitions/User',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //user - preferences
    '/api/users/me/preferences': {
      get: {
        tags: ['User Preferences'],
        summary: 'Shows user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/preferences/fcm': {
      patch: {
        tags: ['User Preferences'],
        summary: 'Updates fcmToken in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                fcmToken: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/preferences/wwa': {
      patch: {
        tags: ['User Preferences'],
        summary: 'Updates weekly work activity in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                monday: {
                  type: 'boolean',
                },
                tuesday: {
                  type: 'boolean',
                },
                wednesday: {
                  type: 'boolean',
                },
                thursday: {
                  type: 'boolean',
                },
                friday: {
                  type: 'boolean',
                },
                saturday: {
                  type: 'boolean',
                },
                sunday: {
                  type: 'boolean',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/preferences/wsa': {
      patch: {
        tags: ['User Preferences'],
        summary: 'Updates weekly stretch activity in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                startTime: {
                  type: 'string',
                },
                monday: {
                  type: 'boolean',
                },
                tuesday: {
                  type: 'boolean',
                },
                wednesday: {
                  type: 'boolean',
                },
                thursday: {
                  type: 'boolean',
                },
                friday: {
                  type: 'boolean',
                },
                saturday: {
                  type: 'boolean',
                },
                sunday: {
                  type: 'boolean',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/preferences/fst': {
      patch: {
        tags: ['User Preferences'],
        summary: 'Updates to fixed start time in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                startTime: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/preferences/fsp': {
      patch: {
        tags: ['User Preferences'],
        summary: 'Updates to fixed start period in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                startPeriodId: {
                  type: 'integer',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/preferences/goal': {
      patch: {
        tags: ['User Preferences'],
        summary: 'Updates goals in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                criticalPain: {
                  type: 'boolean',
                },
                painFromWork: {
                  type: 'boolean',
                },
                futurePain: {
                  type: 'boolean',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/preferences/notification': {
      patch: {
        tags: ['User Preferences'],
        summary: 'Updates notification in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                allowTimerNotifications: {
                  type: 'boolean',
                },
                allowWorkoutNotifications: {
                  type: 'boolean',
                },
                allowGeneralNotifications: {
                  type: 'boolean',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                preferences: {
                  type: 'object',
                  $ref: '#/definitions/User Preferences',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //GAME -> achievement
    '/api/achievements': {
      get: {
        tags: ['Game'],
        summary: 'Show achievements',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                achievements: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Achievement',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    //GAME -> core
    '/api/users/me/game': {
      get: {
        tags: ['Game'],
        summary: 'Show user game info',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                game: {
                  $ref: '#/definitions/Game',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    //GAME -> game action
    '/api/gameActions': {
      get: {
        tags: ['Game'],
        summary: 'Show all game actions',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                gameActions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Game Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    //GAME -> level
    '/api/levels': {
      get: {
        tags: ['Game'],
        summary: 'Show all levels',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                levels: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Level',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    //GAME -> user - game action
    '/api/users/me/gameActions/{gameActionId}': {
      post: {
        tags: ['Game'],
        summary: 'Add User Game Action',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'gameActionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                userGameAction: {
                  type: 'object',
                  $ref: '#/definitions/User Game Action',
                },
              },
            },
          },
          204: {
            description: 'No Content',
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //group
    '/api/groups': {
      get: {
        tags: ['Group'],
        summary: 'Show all groups',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                groups: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Group',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      post: {
        tags: ['Group'],
        summary: 'Add group',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                isPublic: {
                  type: 'boolean',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                group: {
                  type: 'object',
                  $ref: '#/definitions/Group',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/groups/{groupId}': {
      get: {
        tags: ['Group'],
        summary: 'Show group by id',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'groupId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                group: {
                  type: 'object',
                  $ref: '#/definitions/Group',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['Group'],
        summary: 'Update group',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'groupId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                isPublic: {
                  type: 'boolean',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovement: {
                  type: 'object',
                  $ref: '#/definitions/Group',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Group'],
        summary: 'Delete group',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'groupId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //user - group
    '/api/users/me/groups': {
      get: {
        tags: ['User - Group'],
        summary: 'Show all groups that the user is part of',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                groups: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Group',
                  },
                },
                relations: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Group',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/{userId}/groups/{groupId}': {
      post: {
        tags: ['User - Group'],
        summary: 'Add user group relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'groupId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['User - Group'],
        summary: 'Delete user group relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'groupId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['User - Group'],
        summary: 'Update user group role',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'groupId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                admin: {
                  type: 'boolean',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //body part
    '/api/bodyParts': {
      get: {
        tags: ['Body Part'],
        summary: 'Show all body parts',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                bodyParts: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Body Part',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      post: {
        tags: ['Body Part'],
        summary: 'Add body part',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                bodyPart: {
                  type: 'object',
                  $ref: '#/definitions/Body Part',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/bodyParts/{bodyPartId}': {
      get: {
        tags: ['Body Part'],
        summary: 'Show body part by id',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'bodyPartId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                bodyPart: {
                  type: 'object',
                  $ref: '#/definitions/Body Part',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['Body Part'],
        summary: 'Update body part',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'bodyPartId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                bodyPart: {
                  type: 'object',
                  $ref: '#/definitions/Body Part',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Body Part'],
        summary: 'Delete body part',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'bodyPartId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //stretch movement - body part
    '/api/bodyParts/{bodyPartId}/stretchMovements': {
      get: {
        tags: ['Stretch Movement - Body Part'],
        summary: 'Show all stretch movements that contains the body part',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'bodyPartId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovements: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Movement',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/bodyParts/{bodyPartId}/stretchMovements/{stretchMovementId}': {
      post: {
        tags: ['Stretch Movement - Body Part'],
        summary: 'Add stretch movement body part relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'bodyPartId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Stretch Movement - Body Part'],
        summary: 'Delete stretch movement body part relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'bodyPartId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //stretch movement
    '/api/stretchMovements': {
      get: {
        tags: ['Stretch Movement'],
        summary: 'Show all stretch movements',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovements: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Movement',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      post: {
        tags: ['Stretch Movement'],
        summary: 'Add stretch movement',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                duration: {
                  type: 'integer',
                },
                imageFileUrl: {
                  type: 'string',
                },
                videoFileUrl: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovement: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Movement',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/stretchMovements/{stretchMovementId}': {
      get: {
        tags: ['Stretch Movement'],
        summary: 'Show stretch movement by id',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovement: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Movement',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['Stretch Movement'],
        summary: 'Update stretch movement',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                duration: {
                  type: 'integer',
                },
                imageFileUrl: {
                  type: 'string',
                },
                videoFileUrl: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovement: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Movement',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Stretch Movement'],
        summary: 'Delete stretch movement',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //stretch session - stretch movement
    '/api/stretchMovements/{stretchMovementId}/stretchSessions/': {
      get: {
        tags: ['Stretch Session - Stretch Movement'],
        summary: 'Show all stretch sessions that contains the stretch movement',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchSessions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Session',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/stretchMovements/{stretchMovementId}/stretchSessions/{stretchSessionId}': {
      post: {
        tags: ['Stretch Session - Stretch Movement'],
        summary: 'Add stretch session stretch movement relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Stretch Session - Stretch Movement'],
        summary: 'Delete stretch session stretch movement relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //stretch session
    '/api/stretchSessions': {
      get: {
        tags: ['Stretch Session'],
        summary: 'Show all stretch sessions',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchSessions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Session',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      post: {
        tags: ['Stretch Session'],
        summary: 'Add stretch session',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                imageFileUrl: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchSession: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Session',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/stretchSessions/{stretchSessionId}': {
      get: {
        tags: ['Stretch Session'],
        summary: 'Show stretch session by id',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchSession: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Session',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['Stretch Session'],
        summary: 'Update stretch session',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                imageFileUrl: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchSession: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Session',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Stretch Session'],
        summary: 'Delete stretch session',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //stretch challenge - stretch session
    '/api/stretchSessions/{stretchSessionId}/stretchChallenges/': {
      get: {
        tags: ['Stretch Challenge - Stretch Session'],
        summary:
          'Show all stretch challenges that contains the stretch session',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchChallenges: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Challenge',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/stretchSessions/{stretchSessionId}/stretchChallenges/{stretchChallengeId}': {
      post: {
        tags: ['Stretch Challenge - Stretch Session'],
        summary: 'Add stretch challenge stretch session relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Stretch Challenge - Stretch Session'],
        summary: 'Delete stretch challenge stretch session relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //stretch challenge
    '/api/stretchChallenges': {
      get: {
        tags: ['Stretch Challenge'],
        summary: 'Show all stretch challenges',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchChallenges: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Challenge',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      post: {
        tags: ['Stretch Challenge'],
        summary: 'Add stretch challenge',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchChallenge: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Challenge',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/stretchChallenges/{stretchChallengeId}': {
      get: {
        tags: ['Stretch Challenge'],
        summary: 'Show stretch challenge by id',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchChallenge: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Challenge',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['Stretch Challenge'],
        summary: 'Update stretch challenge',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchChallenge: {
                  type: 'object',
                  $ref: '#/definitions/Stretch Challenge',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['Stretch Challenge'],
        summary: 'Delete stretch challenge',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //user - stretch movement
    '/api/users/me/stretchMovements': {
      get: {
        tags: ['User - Stretch Movement'],
        summary: 'Show all stretch Movements that the user is doing',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovements: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Movement',
                  },
                },
                relations: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Stretch Movement',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/stretchMovements/{stretchMovementId}': {
      post: {
        tags: ['User - Stretch Movement'],
        summary: 'Add users stretch Movement relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['User - Stretch Movement'],
        summary: 'Delete users stretch Movement relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['User - Stretch Movement'],
        summary: 'Update users stretch Movement progress',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchMovementId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                progress: {
                  type: 'integer',
                  minimum: 0,
                  maximun: 100,
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //user - stretch session
    '/api/users/me/stretchSessions': {
      get: {
        tags: ['User - Stretch Session'],
        summary: 'Show all stretch Sessions that the user is doing',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchSessions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Session',
                  },
                },
                relations: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Stretch Session',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/stretchSessions/{stretchSessionId}': {
      post: {
        tags: ['User - Stretch Session'],
        summary: 'Add users stretch Session relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['User - Stretch Session'],
        summary: 'Delete users stretch Session relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['User - Stretch Session'],
        summary: 'Update users stretch Session progress',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchSessionId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                progress: {
                  type: 'integer',
                  minimum: 0,
                  maximun: 100,
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //user - stretch challenge
    '/api/users/me/stretchChallenges': {
      get: {
        tags: ['User - Stretch Challenge'],
        summary: 'Show all stretch challenges that the user is doing',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchChallenges: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Challenge',
                  },
                },
                relations: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Stretch Challenge',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/stretchChallenges/{stretchChallengeId}': {
      post: {
        tags: ['User - Stretch Challenge'],
        summary: 'Add users stretch challenge relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      delete: {
        tags: ['User - Stretch Challenge'],
        summary: 'Delete users stretch challenge relation',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          202: {
            description: 'Accepted',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
      patch: {
        tags: ['User - Stretch Challenge'],
        summary: 'Update users stretch challenge progress',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'stretchChallengeId',
            schema: {
              type: 'integer',
              minimum: 1,
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                progress: {
                  type: 'integer',
                  minimum: 0,
                  maximun: 100,
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //recommendation
    '/api/users/me/stretchMovements/recommended': {
      get: {
        tags: ['User Recommended Workout'],
        summary: 'Show Recommended Stretch Movements For Current User',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchMovements: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Movement',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/stretchSessions/recommended': {
      get: {
        tags: ['User Recommended Workout'],
        summary: 'Show Recommended Stretch Sessions For Current User',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchSessions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Session',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/stretchChallenges/recommended': {
      get: {
        tags: ['User Recommended Workout'],
        summary: 'Show Recommended Stretch Challenges For Current User',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                stretchChallenges: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Stretch Challenge',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
  },

  definitions: {
    Configuration: {
      type: 'object',
      properties: {
        version: {
          type: 'string',
        },
        lastCompatibleVersion: {
          type: 'string',
        },
        status: {
          type: 'string',
        },
        website: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },

    User: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        photoUrl: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },

    'User Preferences': {
      type: 'object',
      properties: {
        fcmToken: {
          type: 'string',
        },
        startTime: {
          type: 'string',
        },
        allowTimerNotifications: {
          type: 'boolean',
        },
        allowWorkoutNotifications: {
          type: 'boolean',
        },
        allowGeneralNotifications: {
          type: 'boolean',
        },
        UserPreferenceWeeklyStretchActivity: {
          type: 'object',
          $ref: '#/definitions/Weekly Stretch Activity',
        },
        UserPreferenceWeeklyWorkActivity: {
          type: 'object',
          $ref: '#/definitions/Weekly Work Activity',
        },
        UserPreferenceGoal: {
          type: 'object',
          $ref: '#/definitions/Goal',
        },
        UserPreferenceTimeType: {
          type: 'object',
          $ref: '#/definitions/Time Type',
        },
        UserPreferenceStartPeriod: {
          type: 'object',
          $ref: '#/definitions/Start Period',
        },
      },
    },

    'Game Action Type': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
      },
    },

    'Game Action': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        xp: {
          type: 'integer',
        },
        GameActionType: {
          type: 'object',
          $ref: '#/definitions/Game Action Type',
        },
      },
    },

    'User Game Action': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        GameActionId: {
          type: 'integer',
        },
        counter: {
          type: 'integer',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },

    Game: {
      type: 'object',
      properties: {
        xp: {
          type: 'integer',
        },
        level: {
          type: 'object',
          properties: {
            current: {
              type: 'object',
              $ref: '#/definitions/Level',
            },
            next: {
              type: 'object',
              $ref: '#/definitions/Level',
            },
          },
        },
        achievements: {
          type: 'object',
          properties: {
            achieved: {
              type: 'array',
              items: {
                properties: {
                  id: {
                    type: 'integer',
                  },
                  name: {
                    type: 'string',
                  },
                  requirement: {
                    type: 'integer',
                  },
                  xp: {
                    type: 'integer',
                  },
                  badgeImageUrl: {
                    type: 'string',
                  },
                  iconImageUrl: {
                    type: 'string',
                  },
                },
              },
            },
            incomplete: {
              type: 'array',
              items: {
                properties: {
                  id: {
                    type: 'integer',
                  },
                  name: {
                    type: 'string',
                  },
                  requirement: {
                    type: 'integer',
                  },
                  xp: {
                    type: 'integer',
                  },
                  badgeImageUrl: {
                    type: 'string',
                  },
                  iconImageUrl: {
                    type: 'string',
                  },
                  progress: {
                    type: 'integer',
                  },
                },
              },
            },
          },
        },
      },
    },

    Achievement: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        requirement: {
          type: 'integer',
        },
        xp: {
          type: 'integer',
        },
        badgeImageUrl: {
          type: 'string',
        },
        iconImageUrl: {
          type: 'string',
        },
        GameAction: {
          type: 'object',
          $ref: '#/definitions/Game Action',
        },
      },
    },

    Level: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        xp: {
          type: 'integer',
        },
      },
    },

    Group: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        OwnerId: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        isPublic: {
          type: 'boolean',
        },
      },
    },

    'User Group': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        GroupId: {
          type: 'integer',
        },
        admin: {
          type: 'boolean',
        },
        updatedAt: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
      },
    },

    'Weekly Stretch Activity': {
      type: 'object',
      properties: {
        startTime: {
          type: 'string',
        },
        monday: {
          type: 'boolean',
        },
        tuesday: {
          type: 'boolean',
        },
        wednesday: {
          type: 'boolean',
        },
        thursday: {
          type: 'boolean',
        },
        friday: {
          type: 'boolean',
        },
        saturday: {
          type: 'boolean',
        },
        sunday: {
          type: 'boolean',
        },
      },
    },

    'Weekly Work Activity': {
      type: 'object',
      properties: {
        monday: {
          type: 'boolean',
        },
        tuesday: {
          type: 'boolean',
        },
        wednesday: {
          type: 'boolean',
        },
        thursday: {
          type: 'boolean',
        },
        friday: {
          type: 'boolean',
        },
        saturday: {
          type: 'boolean',
        },
        sunday: {
          type: 'boolean',
        },
      },
    },

    Goal: {
      type: 'object',
      properties: {
        criticalPain: {
          type: 'boolean',
        },
        painFromWork: {
          type: 'boolean',
        },
        futurePain: {
          type: 'boolean',
        },
      },
    },

    'Time Type': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
      },
    },

    'Start Period': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        startsAt: {
          type: 'string',
        },
        endsAt: {
          type: 'string',
        },
      },
    },

    'Body Part': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
      },
    },

    'Stretch Movement': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        duration: {
          type: 'integer',
        },
        imageFileUrl: {
          type: 'string',
        },
        videoFileUrl: {
          type: 'string',
        },
        BodyParts: {
          type: 'array',
          items: {
            $ref: '#/definitions/Body Part',
          },
        },
      },
    },

    'Stretch Session': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        duration: {
          type: 'integer',
        },
        imageFileUrl: {
          type: 'integer',
        },
        StretchMovements: {
          type: 'array',
          items: {
            $ref: '#/definitions/Stretch Movement',
          },
        },
      },
    },

    'Stretch Challenge': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'integer',
        },
        description: {
          type: 'integer',
        },
        duration: {
          type: 'integer',
        },
        StretchSessions: {
          type: 'array',
          items: {
            $ref: '#/definitions/Stretch Session',
          },
        },
      },
    },

    'User Stretch Movement': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        StretchMovementId: {
          type: 'integer',
        },
        progress: {
          type: 'integer',
        },
        updatedAt: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
      },
    },

    'User Stretch Session': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        StretchSessionId: {
          type: 'integer',
        },
        progress: {
          type: 'integer',
        },
        updatedAt: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
      },
    },

    'User Stretch Challenge': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        StretchChallengeId: {
          type: 'integer',
        },
        progress: {
          type: 'integer',
        },
        updatedAt: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
      },
    },

    Error: {
      type: 'object',
      properties: {
        errorCode: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
        errors: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        method: {
          type: 'string',
        },
        url: {
          type: 'string',
        },
      },
    },
  },
}
