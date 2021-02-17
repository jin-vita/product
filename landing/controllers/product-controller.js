const Database = require('../database/database_mysql')
const logger = require('../util/logger')
const param = require('../util/param')
const util = require('../util/util')

/**
 * @Controller(path="/")
 */
class Land {

    constructor() {
        this.database = new Database('database_mysql')
    }

    /**
     * @RequestMapping(path="/", method="get")
     */
    index(req, res) {
        logger.debug(`Land:index 호출됨 - GET /`)

        util.render(req, res, 'product_index', {})
    }
}

module.exports = Land
