import { createClient } from "redis";

const redis = await createClient().connect();

export const saveData = async (data: string) => {
	// Save data to Redis
	await redis.set("item", data);
};

export const getData = async () => {
	// Fetch data from Redis
	const result = await redis.get("item");

	// Return the result
	return result;
};
export const deleteData = async () => {
	// Delete data from Redis
	await redis.del("item");
};
