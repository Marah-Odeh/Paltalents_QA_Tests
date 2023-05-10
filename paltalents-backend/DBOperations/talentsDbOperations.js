const config = require('../dbconfig');
const sql = require('mssql');

async function filterQuery(name, city, talent, number, rating) {
    let query = "SELECT DISTINCT A.stageName, T_T.TalentName, U.Userid, U.profilePicture FROM Artist_table A, Artist_Talents A_T, Talent_Type T_T, User_table U WHERE A.userid = A_T.userid  AND T_T.Talentid = A_T.Talentid AND U.Userid = A_T.Userid ";;
    if (name) {
        query+="AND A.stageName LIKE @name ";
    }
    if (city) {
        query+="AND U.city LIKE @city ";
    }
    if (talent) {
        for (let i=0; i<talent.length; i++) {
            if (i==0) {
                query+="AND (T_T.TalentName LIKE '%"+talent[i]+"%' ";
            } else {
                query+="OR T_T.TalentName LIKE '%"+talent[i]+"%' ";
            }
            if (i==talent.length-1) {
                query+=") "
            }
        }
    }
    if (number!=undefined) {
        number = number>=1?1:0;
        query+="AND A.individual = @individual ";
    }
    if (rating) {
        query+="AND ROUND(CAST(totalRating AS FLOAT)/CAST(numRating AS FLOAT), 0) = @rating ";
    }
    try {
        let pool = await sql.connect(config);
        let talents = await pool.request()
        .input("name", sql.VarChar, "%"+name+"%")
        .input("city", sql.VarChar, "%"+city+"%")
        .input("talent", sql.VarChar, "%"+talent+"%")
        .input("individual", sql.Bit, number)
        .input("rating", sql.VarChar, rating)
        .query(query);
        return talents.recordsets; 
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    filterQuery: filterQuery
}