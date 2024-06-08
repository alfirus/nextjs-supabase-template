import AuthForm from '@/components/login/AuthForm';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <AuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <a className="underline underline-offset-4 hover:text-primary" href="/terms">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="underline underline-offset-4 hover:text-primary" href="/privacy">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
