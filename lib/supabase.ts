import { createClient } from '@supabase/supabase-js';

// Safe access to environment variables that works in various environments
const getEnv = (key: string) => {
  try {
    // Check process.env (Node/Bundlers)
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return process.env[key];
    }
  } catch (e) {
    // Ignore ReferenceErrors
  }

  try {
    // Check import.meta.env (Vite/Modern Browsers)
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
      // @ts-ignore
      return import.meta.env[key];
    }
  } catch (e) {
    // Ignore errors
  }
  
  return '';
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseKey = getEnv('VITE_SUPABASE_ANON_KEY');

// Initialize the client only if keys are present.
// Otherwise, export a mock client to prevent "supabaseUrl is required" error during initial load.
export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : {
      from: (table: string) => ({
        select: async () => {
            console.warn(`[Supabase Mock] Select on table "${table}" blocked. Missing VITE_SUPABASE_URL/KEY.`);
            return { data: null, error: { message: 'Database configuration missing' } };
        },
        insert: async (data: any) => {
            console.warn(`[Supabase Mock] Insert on table "${table}" blocked. Missing VITE_SUPABASE_URL/KEY.`);
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 500));
            return { data: null, error: { message: 'Database configuration missing' } };
        }
      })
    } as any;