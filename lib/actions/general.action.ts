import { db } from "@/firebase/admin";

export async function getInterviewsByUserId(userId:string): Promise<Interview[] | null>{
    const interviews = await db.collection('interviews').where('userId', '==', userId).orderBy('createdAt', 'desc').get(); 
    //note: if you wrap an object in parentheses, it means return it immediately
    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() 
    }))as Interview[];
}

export async function getLatestInterviews(params:GetLatestInterviewsParams): Promise<Interview[] | null>{
    const {userId , limit = 20} = params;
    const interviews = await db.collection('interviews').orderBy('createdAt', 'desc').where('finalized', '==', true).where('userId', '==', userId).limit(limit).get(); 
    //note: if you wrap an object in parentheses, it means return it immediately
    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() 
    }))as Interview[];
}

export async function getInterviewsById(id:string): Promise<Interview | null>{
    const interview = await db.collection('interviews').doc(id).get();
    //note: if you wrap an object in parentheses, it means return it immediately
    return interview.data() as Interview | null;
}