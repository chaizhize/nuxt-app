import {exec,escape} from '../../config/mysql'
import {genPassword} from '../../utils/cryp'
const mysql = require('mysql')

const login = async (username, password) => {
    username = escape(username)
    password = genPassword(password)
    password = escape(password)
    const sql = `select username, realname, id from users where username=${username} and password=${password};`
    const rows = await exec(sql)
    return rows[0] || {}
}
export default login


