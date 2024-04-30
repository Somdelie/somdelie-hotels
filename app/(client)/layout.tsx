import Navbar from "@/components/client/layout/Navbar";

const Client = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen ">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Client;
