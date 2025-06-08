interface PageTitleProps {
  pageName: string;
}

export default function PageTitle({ pageName }: PageTitleProps) {
  return (
    <div className="flex h-full w-full  items-center flex-col gap-2 justify-center text-sm sm:text-lg text-gray-700 dark:text-gray-400">
      <h1>Welcome in {pageName} page</h1>

      {pageName !== "Payment" && <ContinueButton />}
    </div>
  );
}
