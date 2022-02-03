interface Influencer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
    handle: string;
    blocked: boolean;
    country: string;
}

interface CountryCount {
    country: string;
    count: number;
    blocked: number;
}

export const countInfluencers = (influencers: Influencer[]): CountryCount[] => {
    const count = new Map<string, number>()
    const blocked = new Map<string, number>()
    const result: CountryCount[] = []

    influencers.forEach((influencer) => {
        if(count.has(influencer.country)) {
            const qty = count.get(influencer.country);
            count.set(influencer.country, qty! + 1);
        }
        else {
            count.set(influencer.country, 1);
        }

        if(influencer.blocked) {
            if(blocked.has(influencer.country)) {
                const qty = blocked.get(influencer.country);
                blocked.set(influencer.country, qty! + 1);
            }
            else {
                blocked.set(influencer.country, 1)
            }
        }
    });

    for(const key of count.keys()){
        const country = {
            country: key,
            count: count.get(key)!,
            blocked: blocked.get(key)!
        }

        result.push(country)
    }

    return result
}