export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'TOS data server',
    description: 'Tamandua Open Source project',
  },

  tags: [
    {
      name: 'User',
      description: 'API for user data',
    },
    {
      name: 'Stretch Sessions',
      description: 'API for stretch session data',
    },
  ],

  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
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
    '/api/users/me/preferences/wbd': {
      patch: {
        tags: ['User'],
        summary: 'Update work duration and break duration in user preference',
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
                workDuration: {
                  type: 'integer',
                },
                breakDuration: {
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
    '/api/stretchSessions': {
      get: {
        tags: ['Stretch Sessions'],
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
        tags: ['Stretch Sessions'],
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
  },

  definitions: {
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
        breakDuration: {
          type: 'integer',
        },
        breakLimitDuration: {
          type: 'integer',
        },
        breakIdleLimitDuration: {
          type: 'integer',
        },
        lastBreakStartTime: {
          type: 'string',
        },
        workDuration: {
          type: 'integer',
        },
        workLimitDuration: {
          type: 'integer',
        },
        workIdleLimitDuration: {
          type: 'integer',
        },
        lastWorkStartTime: {
          type: 'string',
        },
        pauseLimitDuration: {
          type: 'integer',
        },
        pauseIdleLimitDuration: {
          type: 'integer',
        },
        lastPauseStartTime: {
          type: 'string',
        },
        currentState: {
          type: 'string',
        },
        lastState: {
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
  },
}
