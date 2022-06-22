const db = require('../database/mysql');
db.connect(); // MYSQL CONNECT METHOD -- Create connection / open connection 


function queryHandler(query) {
    return new Promise(function (resolve, reject) {
        db.query(query, function (err, result) {
            if (err) reject(err);

            resolve(result);
        });
    });
}

module.exports.ArticlesController = {

    create(data) {
        const query = `INSERT INTO posts
        (title, body, userId) 
        VALUES ('${data.title}', '${data.body}', 1)`;

        return queryHandler(query);
    },

    list() {
        const query = `SELECT * FROM posts`;
        return queryHandler(query);
    },

    update(data, id) {
        const query = `UPDATE posts 
        SET 
        title = '${data.title}', 
        body = '${data.body}'
        where id = ${id}`;

        return queryHandler(query);
    },

    remove(id) {
        const query = `DELETE from posts where id = ${id}`;

        return queryHandler(query);
    }

};



