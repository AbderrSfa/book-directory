import { Client } from 'pg';
import { promises as fs } from 'fs';
import * as path from 'path';

const dbPath: string = path.join(__dirname, './books.sql');

const client = new Client({
	host: 'localhost',
	user: 'postgres',
	port: 5432,
	password: 'postgres',
});

const initDB = async () => {
	client.connect();
	client.query('DROP DATABASE IF EXISTS booksdirectory');
	client.query('CREATE DATABASE booksdirectory;');

	const sqlQueries = await fs.readFile(dbPath, 'utf-8');
	client.query(sqlQueries);
};

export {initDB, client};
