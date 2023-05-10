const config = require('../dbconfig');
const sql = require('mssql');

async function getPosterImages() {
    try {
        const sqlStmt = "SELECT TOP 3 image FROM Event_table WHERE StartDate>=CURRENT_TIMESTAMP ORDER BY ViewsRecord DESC";
        let pool = await sql.connect(config);
        let images = await pool.request().query(sqlStmt);
        return images.recordsets;
    } catch (error) {
        throw new Error(error);
    }
}

async function getTrendingEvents() {
    try {
        const sqlStmt = "SELECT TOP 10 name, location, image FROM Event_table WHERE StartDate>=CURRENT_TIMESTAMP ORDER BY ViewsRecord DESC";
        let pool = await sql.connect(config);
        let events = await pool.request().query(sqlStmt);
        return events.recordsets;
    } catch (error) {
        throw new Error(error);
    }
}

async function getTrendingTalents() {
    try {
        const sqlStmt = "SELECT TOP 10 A.stageName, T_T.TalentName, U.profilePicture FROM Artist_table A, Artist_Talents A_T, Talent_type T_T, User_table U WHERE A.UserId = U.UserId AND A_T.Userid = A.Userid AND T_T.Talentid = A_T.Talentid ORDER BY A.viewsRecord DESC";
        let pool = await sql.connect(config);
        let talents = await pool.request().query(sqlStmt);
        return talents.recordsets;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getPosterImages: getPosterImages,
    getTrendingEvents: getTrendingEvents,
    getTrendingTalents: getTrendingTalents
}