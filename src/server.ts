import express, { response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();
app.use(express.json());

app.listen(3333);

app.post('/orphanages', async (request, response) => {
	const {
		name, 
		latitude, 
		longitude, 
		about, 
		instructions, 
		opening_hours,
		open_on_weekends,
	} = request.body;

	const orphanagesRepository = getRepository(Orphanage);
	const orphanage = orphanagesRepository.create({
		name,
		latitude,
		longitude,
		about,
		instructions,
		opening_hours,
		open_on_weekends,
	});

	await orphanagesRepository.save(orphanage);

	return response.json({message: 'Hello world'});
});