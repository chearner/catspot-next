import clientPromise from '../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const movies = await db.collection('movies').find({}).sort({ metacritic: -1 }).limit(20).toArray();
    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
