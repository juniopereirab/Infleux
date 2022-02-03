import express, {Request, Response} from "express";
import { countInfluencers } from "./app/countInfluencers";
import {influencers} from './mock_influencers'
const app = express()

app.get('/stats', (req: Request, res: Response) => {
    const countries = countInfluencers(influencers)
    return res.status(200).json({
        stats: {
            countries,
            total: influencers.length
        }
    });
})


app.listen(3000, () => {
    console.log("Server rodando na porta 3000")
})