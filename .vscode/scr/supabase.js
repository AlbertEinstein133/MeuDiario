// Importa função para criar cliente Supabase
import { createClient } from '@supabase/supabase-js';
// Importa constantes do Expo
import Constants from 'expo-constants';

// Obtém a URL do Supabase das variáveis de ambiente ou do manifest do Expo
const SUPABASE_URL = process.env.SUPABASE_URL || Constants.manifest?.extra?.SUPABASE_URL;
// Obtém a chave anônima do Supabase das variáveis de ambiente ou do manifest do Expo
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || Constants.manifest?.extra?.SUPABASE_ANON_KEY;

// Cria e exporta cliente Supabase para ser usado em toda a aplicação
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);