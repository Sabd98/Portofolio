
export default function Footer() {
  return (
    <footer className="w-full bg-slate-200 dark:bg-slate-950">
      <div className="container mx-auto py-4 flex items-center justify-center">
        <p className="text-center text-lg dark:text-white text-opacity-60 m-0">
          © {new Date().getFullYear()} Sabda Avicenna. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
