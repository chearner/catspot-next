import clientPromise from '../../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { ObjectId } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = `${req.query.id}`;
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const movies = await db.collection('movies').findOne({ _id: new ObjectId(id) });
    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
