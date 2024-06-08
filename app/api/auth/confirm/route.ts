import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest, NextResponse } from 'next/server';
import { customAlphabet } from 'nanoid';
import { createClient } from '@/utils/supabase/server';

// ランダムなusernameを生成するためのヘルパー関数
const generateRandomUsername = () => {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 8);
  return nanoid();
};

// Creating a handler to a GET request to route /auth/confirm
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = '/first-setting-account';

  // Create redirect link without the secret token
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete('token_hash');
  redirectTo.searchParams.delete('type');

  if (token_hash && type) {
    const supabaseServer = createClient();

    const { data, error } = await supabaseServer.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // 初期はランダムなusernameを生成して、profilesテーブルに追加
      const { error: profileInsertError } = await supabaseServer
        .from('profiles')
        .insert({ id: data.user?.id as string, username: generateRandomUsername() });
      if (profileInsertError) {
        // return the user to an error page with some instructions
        console.log(profileInsertError);
        redirectTo.pathname = '/error';
        return NextResponse.redirect(redirectTo);
      }
      redirectTo.searchParams.delete('next');
      return NextResponse.redirect(redirectTo);
    }
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = '/error';
  return NextResponse.redirect(redirectTo);
}
