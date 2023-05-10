const config = require('../dbconfig');
const sql = require('mssql');

async function artistJoinSection(SectionId, ArtistId) {
    try {
        const insertStmt = 'UPDATE Sections SET ArtistId = @ArtistId WHERE SectionId = @SectionId';
        let pool = await sql.connect(config);
        await pool.request()
        .input('ArtistId', sql.Int, ArtistId)
        .input('SectionId', sql.Int, SectionId)
        .query(insertStmt);
    } catch (error) {
        throw new Error(error);
    }
}

async function addUser(LastName, FirstName, PhoneNum, Email, Password, City, About, tokenID, numRating, totalRating, facebookLink, instagramLink, websiteURL) {
    try {
        const insertStmt = 'INSERT INTO User_table (LastName, FirstName, PhoneNum, Email, Password, City, About, tokenID, numRating, totalRating, facebookLink, instagramLink, websiteURL) VALUES (@LastName, @FirstName, @PhoneNum, @Email, @Password, @City, @About, @tokenID, @numRating, @totalRating, @facebookLink, @instagramLink, @websiteURL);'
        let pool = await sql.connect(config);
        await pool.request()
        .input('LastName', sql.VarChar, LastName)
        .input('FirstName', sql.VarChar, FirstName)
        .input('PhoneNum', sql.Int, PhoneNum)
        .input('Email', sql.VarChar, Email)
        .input('Password', sql.VarChar, Password)
        .input('City', sql.VarChar, City)
        .input('About', sql.VarChar, About)
        .input('tokenID', sql.VarChar, tokenID)
        .input('numRating', sql.Int, numRating)
        .input('totalRating', sql.Int, totalRating)
        .input('facebookLink', sql.VarChar, facebookLink)
        .input('instagramLink', sql.VarChar, instagramLink)
        .input('websiteURL', sql.VarChar, websiteURL)
        .query(insertStmt);
    } catch (error) {
        throw new Error(error);
    }
    
}

module.exports = {
    addUser: addUser,
    artistJoinSection: artistJoinSection,
}