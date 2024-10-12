const { Client } = require('pg');

const db = new Client({
	user: 'class143_owner',
	password: 'BThOV0lZb3YU',
	host: 'ep-holy-lab-a2xm39f8.eu-central-1.aws.neon.tech',
	database: 'di_october',
    ssl: {
        rejectUnauthorized: false
    }
});

db
.connect()
.then(() => {
    console.log('Successfully connected to database');
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
});

// db.query('SELECT * FROM users', (err, result) => {
// 	if (err) {
// 		console.error('Error executing query', err);
// 	} else {
// 		console.log('Query result:', result.rows);
// 	}
// });

db.query("Insert into users(id,name,age,married) VALUES('6','Toobby',40,false);", (err, result) => {
	if (err) {
		console.error('Error executing query', err);
	} else {
		console.log('Query result:', result.rows);
	}
});

