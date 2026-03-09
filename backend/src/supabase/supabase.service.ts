import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    private readonly supabase = createClient(process.env.SUPABASE_URL!, process.env.DB_SECRET_KEY!)

    async getFilePublicUrlFromBucket(bucketName: string, fileName: string | undefined): Promise<string | undefined> {
        if (!fileName)
            return undefined;

        const result = this.supabase.storage.from(bucketName).getPublicUrl(fileName);
        return result.data.publicUrl;
    }
}
