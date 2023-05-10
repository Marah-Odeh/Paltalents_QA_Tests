const config = require('../dbconfig');
const sql = require('mssql');

async function filterQuery(name, city, talent, date) {
    let query = "SELECT DISTINCT E.Eventid, E.Name, E.Image FROM Event_table E ";
    if (talent) {
        query += ", Talent_Tge TG, Talent_Type TP ";
    }
    if (name||city||talent||date) {
        query += "WHERE ";
    }
    if (name) {
        if (!query.endsWith('WHERE ')) {
            query+="AND ";
        }
        query+="E.Name LIKE @name ";
    }
    if (city) {
        if (!query.endsWith('WHERE ')) {
            query+="AND ";
        }
        query+="E.location LIKE @city ";
    }
    if (talent) {
        if (!query.endsWith('WHERE ')) {
            query+="AND ";
        }
        for (let i=0; i<talent.length; i++) {
            if (i==0) {
                query+="TG.Eventid = E.Eventid AND TG.Talentid = TP.Talentid AND (TP.TalentName LIKE '%"+talent[i]+"%' ";
            } else {
                query+="OR TP.TalentName LIKE '%"+talent[i]+"%' ";
            }
            if (i==talent.length-1) {
                query+=") "
            }
        }
    }
    if (date) {
        if (!query.endsWith('WHERE ')) {
            query+="AND ";
        }
        query+="@date >= E.StartDate AND @date <= E.EndDate ";
    }
    try {
        let pool = await sql.connect(config);
        let talents;
        if (date) {
            talents = await pool.request()
            .input("name", sql.VarChar, "%"+name+"%")
            .input("city", sql.VarChar, "%"+city+"%")
            .input("talent", sql.VarChar, "%"+talent+"%")
            .input("date", sql.SmallDateTime, date)
            .query(query);
        } else {
            talents = await pool.request()
            .input("name", sql.VarChar, "%"+name+"%")
            .input("city", sql.VarChar, "%"+city+"%")
            .input("talent", sql.VarChar, "%"+talent+"%")
            .query(query);
        }
        return talents.recordsets; 
    } catch (error) {
        throw new Error(error);
    }
}

async function addEvent(Userid, Location, StartDate, EndDate, EventDescription, Image, ViewsRecord, Name) {
    try {
        const insertStmt = 'INSERT sections (Userid, Location, StartDate, EndDate, EventDescription, Image, ViewsRecord, Name) VALUES (@Userid, @Location, @StartDate, @EndDate, @EventDescription, @Image, @ViewsRecord, @Name);'
        let pool = await sql.connect(config);
        await pool.request()
        .input('Userid', sql.VarChar, Userid)
        .input('Location', sql.VarChar, Location)
        .input('StartDate', sql.Date, StartDate)
        .input('EndDate', sql.Date, EndDate)
        .input('EventDescription', sql.VarChar, EventDescription)
        .input('Image', sql.VarChar, Image)
        .input('ViewsRecord', sql.Int, ViewsRecord)
        .input('Name', sql.VarChar, Name)
        .query(insertStmt);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    addEvent: addEvent,
    filterQuery: filterQuery
}