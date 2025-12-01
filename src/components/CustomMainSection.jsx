export default function CustomMainSection({ children, customStyles }) {
  return (
    <section
      className={`py-10 lg:py-12 xl:py-14 px-4 md:px-8 lg:px-12 max-w-[1400px] w-full mx-auto 2xl:px-0 ${customStyles}`}
    >
      {children}
    </section>
  );
}
