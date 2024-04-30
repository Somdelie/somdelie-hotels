export const metadata = {
  title: "Auth",
};

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex items-center justify-center py-6">
      <div className="relative h-full">
        <span className="bg-green-500 whitespace-nowrap text-white -rotate-90 mark rounded-t-lg px-2 py-1 absolute bottom-1/2 -right-[3.2rem]">
          Somdelie Hotels
        </span>
      </div>

      <div className="">{children}</div>
    </main>
  );
};

export default AuthLayout;
