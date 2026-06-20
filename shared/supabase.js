// ============================================================
// ATMNO.1 — Supabase Client Configuration
// ============================================================
// 1. Create a Supabase project at https://supabase.com
// 2. Run schema.sql in the SQL Editor
// 3. Replace the URL and KEY below
// ============================================================

const SUPABASE_URL  = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY  = 'YOUR_ANON_KEY';

let _supabase = null;

function getSupabase() {
  if (_supabase) return _supabase;
  if (typeof window.supabase === 'undefined') {
    console.warn('Supabase SDK not loaded');
    return null;
  }
  _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  return _supabase;
}

// ============================================================
// Auth helpers
// ============================================================

async function supaSignUp(email, password) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

async function supaSignIn(email, password) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function supaSignOut() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
}

async function supaGetUser() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function supaGetSession() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data: { session } } = await sb.auth.getSession();
  return session;
}

// ============================================================
// Profile helpers
// ============================================================

async function supaGetProfile(userId) {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb.from('profiles').select('*').eq('id', userId).single();
  if (error) { console.error('getProfile:', error); return null; }
  return data;
}

async function supaUpdateProfile(userId, updates) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  const { data, error } = await sb.from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function supaBindWallet(userId, walletAddress) {
  return supaUpdateProfile(userId, { wallet_address: walletAddress.toLowerCase() });
}

// ============================================================
// Admin: User management
// ============================================================

async function supaListUsers({ page = 1, pageSize = 20, search = '', status = '' } = {}) {
  const sb = getSupabase();
  if (!sb) return { data: [], count: 0 };
  let query = sb.from('profiles').select('*', { count: 'exact' });
  if (search) {
    query = query.or(`username.ilike.%${search}%,email.ilike.%${search}%,uid.ilike.%${search}%,wallet_address.ilike.%${search}%`);
  }
  if (status) query = query.eq('status', status);
  query = query.order('created_at', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);
  const { data, count, error } = await query;
  if (error) { console.error('listUsers:', error); return { data: [], count: 0 }; }
  return { data: data || [], count: count || 0 };
}

async function supaSetUserStatus(userId, status) {
  return supaUpdateProfile(userId, { status });
}

async function supaSetUserRole(userId, role) {
  return supaUpdateProfile(userId, { role });
}

// ============================================================
// Admin: Market management
// ============================================================

async function supaListMarkets({ page = 1, pageSize = 20, category = '', status = '', search = '' } = {}) {
  const sb = getSupabase();
  if (!sb) return { data: [], count: 0 };
  let query = sb.from('markets').select('*, market_options(*)', { count: 'exact' });
  if (category) query = query.eq('category', category);
  if (status) query = query.eq('status', status);
  if (search) query = query.ilike('title', `%${search}%`);
  query = query.order('created_at', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);
  const { data, count, error } = await query;
  if (error) { console.error('listMarkets:', error); return { data: [], count: 0 }; }
  return { data: data || [], count: count || 0 };
}

async function supaCreateMarket(market, options) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  const { data: m, error: me } = await sb.from('markets').insert(market).select().single();
  if (me) throw me;
  if (options && options.length > 0) {
    const opts = options.map((o, i) => ({ ...o, market_id: m.id, sort_order: i }));
    const { error: oe } = await sb.from('market_options').insert(opts);
    if (oe) throw oe;
  }
  return m;
}

async function supaUpdateMarket(marketId, updates) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  const { data, error } = await sb.from('markets')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', marketId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function supaDeleteMarket(marketId) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  const { error } = await sb.from('markets').delete().eq('id', marketId);
  if (error) throw error;
}

async function supaUpdateMarketOptions(marketId, options) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  // Delete existing
  await sb.from('market_options').delete().eq('market_id', marketId);
  // Insert new
  if (options && options.length > 0) {
    const opts = options.map((o, i) => ({ ...o, market_id: marketId, sort_order: i }));
    const { error } = await sb.from('market_options').insert(opts);
    if (error) throw error;
  }
}

// ============================================================
// Admin: Homepage config
// ============================================================

async function supaGetHomepageConfig(section) {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.from('homepage_config').select('*').eq('section', section).single();
  return data;
}

async function supaSetHomepageConfig(section, config) {
  const sb = getSupabase();
  if (!sb) throw new Error('Supabase not initialized');
  const { data, error } = await sb.from('homepage_config')
    .upsert({ section, config, updated_at: new Date().toISOString() }, { onConflict: 'section' })
    .select().single();
  if (error) throw error;
  return data;
}

async function supaSetFeatured(marketId, isFeatured, position = 0) {
  return supaUpdateMarket(marketId, { is_featured: isFeatured, featured_position: position });
}

async function supaSetTrending(marketId, isTrending, score = 0) {
  return supaUpdateMarket(marketId, { is_trending: isTrending, trending_score: score });
}

// ============================================================
// Admin: Activity log
// ============================================================

async function supaLogActivity(action, targetType, targetId, details = {}) {
  const sb = getSupabase();
  if (!sb) return;
  const user = await supaGetUser();
  if (!user) return;
  await sb.from('activity_log').insert({
    actor_id: user.id, action, target_type: targetType,
    target_id: targetId, details
  });
}

// ============================================================
// Public: Get markets for frontend
// ============================================================

async function supaGetFeaturedMarkets() {
  const sb = getSupabase();
  if (!sb) return [];
  const { data } = await sb.from('markets')
    .select('*, market_options(*)')
    .eq('is_featured', true)
    .eq('status', 'active')
    .order('featured_position', { ascending: true });
  return data || [];
}

async function supaGetTrendingMarkets(limit = 20) {
  const sb = getSupabase();
  if (!sb) return [];
  const { data } = await sb.from('markets')
    .select('*, market_options(*)')
    .eq('status', 'active')
    .order('trending_score', { ascending: false })
    .limit(limit);
  return data || [];
}

async function supaGetMarketsByCategory(category, limit = 10) {
  const sb = getSupabase();
  if (!sb) return [];
  const { data } = await sb.from('markets')
    .select('*, market_options(*)')
    .eq('category', category)
    .eq('status', 'active')
    .order('sort_order', { ascending: true })
    .limit(limit);
  return data || [];
}

async function supaGetMarketBySlug(slug) {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.from('markets')
    .select('*, market_options(*)')
    .eq('slug', slug)
    .single();
  return data;
}

async function supaGetMarketById(id) {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.from('markets')
    .select('*, market_options(*)')
    .eq('id', id)
    .single();
  return data;
}
