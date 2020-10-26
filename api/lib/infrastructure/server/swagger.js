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
      description: 'API for user data',
    },
    {
      name: 'Body Part',
    },
    {
      name: 'Stretch Movement',
    },
    {
      name: 'Stretch Session',
    },
    {
      name: 'Stretch Challenge',
    },
    {
      name: 'User - Stretch Challenge',
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
          '200': {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Configuration',
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
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
        },
      },
      delete: {
        tags: ['User'],
        summary: 'Delete the logged in user',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
        },
      },
      put: {
        tags: ['User'],
        summary: 'updates the logged in user',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
    },
    '/api/users/me/preferences': {
      get: {
        tags: ['User'],
        summary: 'Shows user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
        },
      },
    },
    '/api/users/me/preferences/fcm': {
      patch: {
        tags: ['User'],
        summary: 'Updates fcmToken in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
    },
    '/api/users/me/preferences/wwa': {
      patch: {
        tags: ['User'],
        summary: 'Updates weekly work activity in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
    },
    '/api/users/me/preferences/wsa': {
      patch: {
        tags: ['User'],
        summary: 'Updates weekly stretch activity in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
    },
    '/api/users/me/preferences/fst': {
      patch: {
        tags: ['User'],
        summary: 'Updates to fixed start time in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
    },
    '/api/users/me/preferences/fsp': {
      patch: {
        tags: ['User'],
        summary: 'Updates to fixed start period in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
    },
    '/api/users/me/preferences/goal': {
      patch: {
        tags: ['User'],
        summary: 'Updates goals in user preferences',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
        },
      },
      post: {
        tags: ['Body Part'],
        summary: 'Add body part',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
      patch: {
        tags: ['Body Part'],
        summary: 'Update body part',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
      delete: {
        tags: ['Body Part'],
        summary: 'Delete body part',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },

    //stretch movement
    '/api/bodyParts/{bodyPartId}/stretchMovements': {
      get: {
        tags: ['Stretch Movement'],
        summary: 'Show stretch movements that have body part id',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
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
        },
      },
    },

    //user - stretch Challenge
    '/api/users/me/stretchChallenges': {
      get: {
        tags: ['User - Stretch Challenge'],
        summary: 'Show all users stretch challenges',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '200': {
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
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
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
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
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
            description: 'Token used to authenticate the user',
            required: false,
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
          '200': {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
              },
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
        StretchSessions: {
          type: 'array',
          items: {
            $ref: '#/definitions/Stretch Session',
          },
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
  },
}
