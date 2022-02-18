import type { NextApiRequest, NextApiResponse } from 'next'

export default function(req: NextApiRequest, res: NextApiResponse){
    const { id } = req.query;
    res.status(200).json({ taskId: id, status: 'updated' })
}