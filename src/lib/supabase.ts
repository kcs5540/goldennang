import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zdjahjnodxwngfahuneu.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_h6Skc8q25iuTriclct5Nig_L--gQX9H';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DbNotice {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  important: boolean;
  views: number;
  created_at: string;
}

export interface DbOrder {
  id: string;
  customer_name: string;
  phone: string;
  product_choice: string;
  quantity: string;
  delivery_type: string;
  preferred_call_time: string;
  address_or_notes: string;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
}

export interface DbB2B {
  id: string;
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  product_type: string;
  estimated_quantity: string;
  message: string;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
}

export interface DbSmsAlert {
  id: string;
  customer_name: string;
  phone: string;
  interested_fruit: string;
  created_at: string;
}
