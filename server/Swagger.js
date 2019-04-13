/**
 * @swagger
 *definitions:
 *  user:
 *    type: "object"
 *    properties:
 *     id:
 *       type: "integer"
 *       description: "Unique  id for a sigle document"
 *     email:
 *       type: "integer"
 *       description: "email of  the user"
 *     password:
 *       type: "integer"
 *       description: "Password of  the user"
 *     phone:
 *       type: "string"
 *       description: "Phone Number of  the user"
 *     role:
 *       type: "array"
 *       description: "Reference to the role assign to this user"
 *       default: "Standard"
 *     name:
 *       type: "object"
 *       description: "Name of the user"
 *       properties:
 *          firstName:
 *             type: "string"
 *          lastName:
 *             type: "string"
 *
 */