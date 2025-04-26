import { createClient } from "redis";

const redis = await createClient({ url: process.env.REDIS_URL }).connect();

export const saveData = async (key: string, data: string) => {
	console.log("Saving data to Redis", key, data);
	await redis.set(key, data, { EX: 60 * 15 });
};

export const getData = async (key: string) => {
	const result = await redis.get(key);

	console.log("Getting data from Redis", key);
	return result;
};
export const deleteData = async (key: string) => {
	// Delete data from Redis
	await redis.del(key);
};
