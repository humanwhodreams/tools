export default function Page() {
  return (
    <main className="flex flex-col gap-4 p-2 md:flex-row">
      <section className="flex-1 px-4 py-3 border-2 rounded-lg border-border">
        timer
      </section>

      <section className="px-4 py-3 border-2 rounded-lg md:w-2/5 border-border">
        config
      </section>
    </main>
  );
}
