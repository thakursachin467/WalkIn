/** @swagger
 * /appmetrics-dash:
 *   get:
 *     summary: "Show the status of the  node application"
 *     description: "Show the status of the  node application"
 */


/** @swagger
 * /webhook/sendSms:
 *   post:
 *     summary: "Send SMS to a number "
 *     description: "Send SMS to a number"
 *     parameters:
 *         - name: body
 *           in: body
 *           description: SMS SENDING WEBHOOK
 *           required: true
 *           type: object
 *           schema:
 *              type: object
 *              properties:
 *                 location:
 *                     type: Object
 *                     properties:
 *                        latitude:
 *                           type: string
 *                        longitude:
 *                           type: string
 *                 phone_number:
 *                     type: number
 *                 detection_time:
 *                     type: Date
 *
 */