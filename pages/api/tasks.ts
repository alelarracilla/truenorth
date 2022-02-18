import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function tasks(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    async function getTasks(){
        const tasksTitle = await fetch('https://lorem-faker.vercel.app/api?quantity=7');
        const response = await tasksTitle.json();
        
        return response;
    }

    getTasks().then(response => {
        res.status(200).json(response);
    })
}